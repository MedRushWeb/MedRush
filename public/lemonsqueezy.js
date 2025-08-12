const uid = localStorage.getItem("uid");
const MYemail =localStorage.getItem("email");


const logBox = document.getElementById("log");
function log(...args){
  const line = args.map(a => (typeof a === "string" ? a : JSON.stringify(a, null, 2))).join(" ");
  logBox.textContent += line + "\n";
  logBox.scrollTop = logBox.scrollHeight;
  console.log(...args);
}

// ---------- Firebase (client) ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let app, auth, db ;

async function initFirebase(){
  const cfg = await fetch("/firebase-config").then(r=>r.json());
  app = initializeApp(cfg);
  auth = getAuth(app);
  db = getFirestore(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById("uid").textContent = uid;
    }
  });
}

document.getElementById("login").addEventListener("click", async () => {
  try {
    if (!app) await initFirebase();
    const userCred = await signInAnonymously(auth);
    document.getElementById("uid").textContent = uid;
    log("✅ Signed in anonymously:", uid);
  } catch (e) {
    console.error(e);
    alert("Firebase sign-in failed. Enable Anonymous Sign-in in Firebase Console.\n" + (e?.message || e));
  }
});

// ---------- Lemon checkout (hidden anchor method) ----------
const HOSTED_LINK = "https://medrush.lemonsqueezy.com/buy/7a68e3f0-9233-465c-8448-58ae47a86d01?embed=1";
const buyBtn = document.getElementById("buy");
const buyAnchor = document.getElementById("buy-anchor");

buyBtn.addEventListener("click", async () => {
  if (!uid) return alert("Login first to get UID");
  if (!window.LemonSqueezy) return alert("LemonSqueezy script not loaded yet. Wait a second and try again.");

  const email = MYemail;
  if (!email) return alert("Please type your email before purchase");

  const url = new URL(HOSTED_LINK);
  url.searchParams.set("embed", "1");
  url.searchParams.set("checkout[custom][uid]", uid);
  url.searchParams.set("checkout[email]", email); // ensure email makes it to LS

  // Configure success handler
  window.LemonSqueezy.Setup({
    eventHandler: async (event) => {
      if (event.event === "Checkout.Success") {
        const buyerEmail = event?.data?.user_email || email;
        try {
          const r = await fetch("/api/ls/capture", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uid, email: buyerEmail })
          });
          const data = await r.json();
          log("capture →", data);
          if (data.subscriptionID) {
            await setDoc(doc(db, "userSubscriptions", uid), {
              LSsubscriptionID: data.subscriptionID,
              LSstatus: data.status
            }, { merge: true });
            log("💾 Saved subscription to Firestore");
          } else {
            log("⚠️ Could not resolve subscription. Consider using webhooks for reliability.");
          }
        } catch (e) {
          log("❌ capture error:", String(e));
        }
      }
    }
  });

  buyAnchor.href = url.toString();
  buyAnchor.click();
});

// ---------- Check subscription: returns true/false ----------
async function checkSubscription(){
  if (!uid) throw new Error("Login first");
  const ref = doc(db, "userSubscriptions", uid);
  const snap = await getDoc(ref);
  const id = snap.exists() ? snap.data().LSsubscriptionID : null;
  if (!id) { log("No LSsubscriptionID found in Firestore for this UID"); return false; }

  const r = await fetch(`/api/ls/check-subscription?subscriptionID=${encodeURIComponent(id)}`);
  const json = await r.json();
  if (json?.status) {
    await setDoc(ref, { LSstatus: json.status }, { merge: true });
  }
  return !!json?.active;
}

document.getElementById("check").addEventListener("click", async () => {
  try {
    const ok = await checkSubscription();
    document.getElementById("status").textContent = String(ok);
    log("✅ checkSubscription:", ok);
  } catch (e) {
    log("❌ checkSubscription error:", String(e));
  }
});

window.checkSubscription = checkSubscription;
