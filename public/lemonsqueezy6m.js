  // ===== Local IDs =====
  const uid = localStorage.getItem("uid");
  const MYemail = localStorage.getItem("email");

  // ===== Firebase (client) =====
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  let app, auth, db;

  async function initFirebase() {
    if (db) return db;
    const cfg = await fetch("/firebase-config").then(r => r.json());
    app = initializeApp(cfg);
    auth = getAuth(app);
    db = getFirestore(app);
    onAuthStateChanged(auth, () => {
      const el = document.getElementById("uid");
      if (el && uid) el.textContent = uid;
    });
    return db;
  }

  // ===== Helpers =====
  // Safely add months to a date (handles month-end overflow)
  function addMonths(date, months) {
    const d = new Date(date);
    const day = d.getDate();
    d.setMonth(d.getMonth() + months);
    if (d.getDate() < day) d.setDate(0);
    return d;
  }

  // Save LS subscription meta to Firestore
  async function saveLSMeta(uid, meta) {
    const { subscriptionID, status, approvedAt, currentPeriodEnd } = meta;
    const ref = doc(db, "userSubscriptions", uid);
    await setDoc(
      ref,
      {
        LSsubscriptionID: subscriptionID || null,
        LSstatus: status || null,
        LSapprovedAt: approvedAt ? new Date(approvedAt) : null,
        LScurrentPeriodEnd: currentPeriodEnd ? new Date(currentPeriodEnd) : null,
        LScurrentPeriodEndEpochMs: currentPeriodEnd ? new Date(currentPeriodEnd).getTime() : null,
        lastUpdated: serverTimestamp()
      },
      { merge: true }
    );
  }

  // Normalize server response into {approvedAt, currentPeriodEnd}
  function normalizePeriodFields(data, fallbackMonths = 6) {
    const now = new Date();
    const approvedAt =
      data?.approvedAt ||
      data?.createdAt ||
      data?.created_at ||
      now.toISOString();

    const periodEndCandidate =
      data?.currentPeriodEnd ||
      data?.current_period_end ||
      data?.renewsAt ||
      data?.renews_at ||
      data?.endsAt ||
      data?.ends_at ||
      data?.trialEndsAt ||
      data?.trial_ends_at ||
      null;

    const endIso = periodEndCandidate
      ? new Date(periodEndCandidate).toISOString()
      : addMonths(new Date(approvedAt), fallbackMonths).toISOString();

    return { approvedAt, currentPeriodEnd: endIso };
  }

  // ===== On Load =====
  window.onload = async function () {
    // Fill UI spans if present
    const uidSpan = document.getElementById("UID");
    const emailSpan = document.getElementById("userEmail");
    if (uidSpan && uid) uidSpan.textContent = uid;
    if (emailSpan && MYemail) emailSpan.textContent = MYemail;

    try {
      await initFirebase();
    } catch (e) {
      console.error(e);
      alert("Firebase init failed. Enable Anonymous Sign-in if required.\n" + (e?.message || e));
    }
// fake one for testing
    const HOSTED_LINK = "https://drwheezy.lemonsqueezy.com/buy/ba137892-a1d2-4421-bb9d-cd8a6fe8112e?embed=1";

  //  const HOSTED_LINK = "https://drwheezy.lemonsqueezy.com/buy/66c8a46b-3323-4d3c-972c-25d5869c1655?embed=1";
    const buyBtn = document.getElementById("buy");
    const buyAnchor = document.getElementById("buy-anchor");
    const createExamBtn = document.getElementById("createExamBtn");

    if (createExamBtn) {
      createExamBtn.addEventListener("click", () => {
        window.location.href = "connect.html";
      });
    }

    if (buyBtn && buyAnchor) {
      buyBtn.addEventListener("click", async () => {
        if (!uid) return alert("Login first to get UID");
        if (!window.LemonSqueezy) return alert("LemonSqueezy script not loaded yet.");
        const email = MYemail;
        if (!email) return alert("Please log out and log in again to make a payment");

        const url = new URL(HOSTED_LINK);
        url.searchParams.set("embed", "1");
        url.searchParams.set("checkout[custom][uid]", uid);
        url.searchParams.set("checkout[email]", email);

        // Setup LS success handler
        window.LemonSqueezy.Setup({
          eventHandler: async (event) => {
            if (event.event === "Checkout.Success") {
              const orderId = event?.data?.id || null;
              const buyerEmail = event?.data?.user_email || email;

              try {
                // Ask your server to capture/lookup subscription details for this order/user
                const r = await fetch("/api/ls/capture", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ uid, email: buyerEmail, orderId })
                });
                const data = await r.json();

                // Expecting server to return at least { subscriptionID, status, ...period fields... }
                const subscriptionID = data?.subscriptionID || null;
                const status = data?.status || null;

                // Normalize dates (fallback = +6 month if server didn't include period end)
                const { approvedAt, currentPeriodEnd } = normalizePeriodFields(data, 6);

                // Save to Firestore
                await saveLSMeta(uid, { subscriptionID, status, approvedAt, currentPeriodEnd });

                // Optional: UI feedback
                const statusEl = document.getElementById("status");
                if (statusEl) statusEl.textContent = status || "Unknown";
              } catch (e) {
                console.error("Capture error:", e);
                alert("Error capturing Lemon Squeezy subscription.");
              }
            }
          }
        });

        // Open checkout
        buyAnchor.href = url.toString();
        buyAnchor.click();
      });
    }

    // Kick an initial status check
    checkSubscription();
    window.checkSubscription = checkSubscription;








  //  alert (await checklemonsqueezy());

  };

  // ===== Check subscription (server endpoint: /api/ls/check-subscription) =====
  async function checkSubscription() {
    if (!uid) throw new Error("Login first");
    if (!db) await initFirebase();

    const ref = doc(db, "userSubscriptions", uid);
    const snap = await getDoc(ref);
    const id = snap.exists() ? snap.data().LSsubscriptionID : null;
    if (!id) return false;

    const r = await fetch(`/api/ls/check-subscription?subscriptionID=${encodeURIComponent(id)}`);
    const json = await r.json();

    // Save status
    const status = json?.status || null;

    // Normalize any dates from server, fallback to +6 month from now if missing and ACTIVE
    let approvedAt = json?.approvedAt || json?.createdAt || json?.created_at || null;
    let currentPeriodEnd =
      json?.currentPeriodEnd ||
      json?.current_period_end ||
      json?.renewsAt ||
      json?.renews_at ||
      json?.endsAt ||
      json?.ends_at ||
      null;

    if (!currentPeriodEnd && status === "active" || status === "ACTIVE") {
      const tmp = addMonths(new Date(), 6);
      currentPeriodEnd = tmp.toISOString();
    }

    await setDoc(
      ref,
      {
        LSstatus: status,
        // Only set if present so we don't overwrite good server data with null
        ...(approvedAt ? { LSapprovedAt: new Date(approvedAt) } : {}),
        ...(currentPeriodEnd ? {
          LScurrentPeriodEnd: new Date(currentPeriodEnd),
          LScurrentPeriodEndEpochMs: new Date(currentPeriodEnd).getTime()
        } : {}),
        lastUpdated: serverTimestamp()
      },
      { merge: true }
    );

    return !!json?.active;
  }
























  // ===== Check subscription (server endpoint: /api/ls/check-subscription) =====
async function checklemonsqueezy() {
  if (!uid) throw new Error("Login first");
  if (!db) await initFirebase();

  const ref = doc(db, "userSubscriptions", uid);
  const snap = await getDoc(ref);
  const id = snap.exists() ? snap.data().LSsubscriptionID : null;
  if (!id) return false;

  const r = await fetch(`/api/ls/check-subscription?subscriptionID=${encodeURIComponent(id)}`);
  const json = await r.json();

  // Normalize fields from server
  const statusRaw = json?.status ?? null;
  const status = typeof statusRaw === "string" ? statusRaw.toLowerCase() : null;

  let approvedAt =
    json?.approvedAt || json?.createdAt || json?.created_at || null;

  let currentPeriodEnd =
    json?.currentPeriodEnd ||
    json?.current_period_end ||
    json?.renewsAt ||
    json?.renews_at ||
    json?.endsAt ||
    json?.ends_at ||
    null;

  // If ACTIVE but no end date provided, default to ~30 days from now
  if (!currentPeriodEnd && status === "active") {
    const d = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    currentPeriodEnd = d.toISOString();
  }

  // Persist normalized data
  await setDoc(
    ref,
    {
      LSstatus: statusRaw ?? null,
      ...(approvedAt ? { LSapprovedAt: new Date(approvedAt) } : {}),
      ...(currentPeriodEnd
        ? {
            LScurrentPeriodEnd: new Date(currentPeriodEnd),
            LScurrentPeriodEndEpochMs: new Date(currentPeriodEnd).getTime(),
          }
        : {}),
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );

  // Decide boolean result
  // 1) Trust explicit boolean from server if present
  if (typeof json?.active === "boolean") {
    return json.active;
  }

  // 2) Otherwise, treat status=active as true
  if (status === "active") {
    return true;
  }

  // 3) Otherwise, if we have a future end date, consider active until then
  if (currentPeriodEnd) {
    return new Date(currentPeriodEnd).getTime() > Date.now();
  }

  // Fallback
  return false;
}

