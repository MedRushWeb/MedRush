/*
import express from "express";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Static file serving
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/audioes", express.static(path.join(__dirname, "audioes")));

// ✅ Firebase config endpoint (add real config here if needed)
app.get("/firebase-config", (req, res) => {
  res.json({

  apiKey: "AIzaSyAtKFbssJoDWHRaDsr6yHEMKJ4cz7jpI1Q",
  authDomain: "medrush-c78fb.firebaseapp.com",
  projectId: "medrush-c78fb",
  storageBucket: "medrush-c78fb.firebasestorage.app",
  messagingSenderId: "382253906640",
  appId: "1:382253906640:web:edeab544653ba45e2dbcd5",
  measurementId: "G-7W9GM9KXZK"
 
});
});

// ✅ Serve JSON files safely from /data/
app.get("/get-json/:name", (req, res) => {
  const fileName = req.params.name + ".json";
  const filePath = path.join(__dirname, "data", fileName);

  // Prevent directory traversal
  if (!filePath.startsWith(path.join(__dirname, "data"))) {
    return res.status(400).json({ error: "Invalid path" });
  }

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Server error" });
    res.json(JSON.parse(data));
  });
});

// ✅ Get PayPal Access Token
async function getPayPalAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });

  if (!response.ok) throw new Error("Failed to get PayPal access token");
  const data = await response.json();
  return data.access_token;
}

// ✅ Check PayPal Subscription Status
app.get("/check-subscription", async (req, res) => {
  const { subscriptionID } = req.query;
  if (!subscriptionID) {
    return res.status(400).json({ error: "Missing subscriptionID" });
  }

  try {
    const accessToken = await getPayPalAccessToken();
    const response = await fetch(
`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.ok) throw new Error("Failed to fetch subscription from PayPal");
    const data = await response.json();

    res.json({
      id: data.id,
      status: data.status,
      next_billing_time: data.billing_info?.next_billing_time || null
    });

  } catch (err) {
    console.error("❌ Error checking subscription:", err);
    res.status(500).json({ error: "Failed to check subscription" });
  }
});

// ✅ Serve main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "subscription.html"));
});

// ✅ Start server
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);


*/
































/*

import express from "express";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// ---------- Middleware / Static ----------
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/audioes", express.static(path.join(__dirname, "audioes")));

// ---------- Firebase config (placeholder) ----------
app.get("/firebase-config", (req, res) => {
  res.json({
    
    
  apiKey: "AIzaSyAtKFbssJoDWHRaDsr6yHEMKJ4cz7jpI1Q",
  authDomain: "medrush-c78fb.firebaseapp.com",
  projectId: "medrush-c78fb",
  storageBucket: "medrush-c78fb.firebasestorage.app",
  messagingSenderId: "382253906640",
  appId: "1:382253906640:web:edeab544653ba45e2dbcd5",
  measurementId: "G-7W9GM9KXZK"
 

  });
});

// ---------- Serve JSON from /data safely ----------
app.get("/get-json/:name", (req, res) => {
  const fileName = req.params.name + ".json";
  const dataDir = path.join(__dirname, "data");
  const filePath = path.join(dataDir, fileName);

  // Prevent directory traversal
  if (!filePath.startsWith(dataDir)) {
    return res.status(400).json({ error: "Invalid path" });
  }

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Server error" });
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: "Invalid JSON file" });
    }
  });
});

// =======================================================
//                        PAYPAL
// =======================================================

// Get PayPal Access Token (SANDBOX)
async function getPayPalAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(`Failed to get PayPal access token: ${response.status} ${txt}`);
  }
  const data = await response.json();
  return data.access_token;
}

// Check PayPal Subscription Status
app.get("/check-subscription", async (req, res) => {
  const { subscriptionID } = req.query;
  if (!subscriptionID) {
    return res.status(400).json({ error: "Missing subscriptionID" });
  }

  try {
    const accessToken = await getPayPalAccessToken();

    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const txt = await response.text();
      throw new Error(`PayPal fetch failed: ${response.status} ${txt}`);
    }
    const data = await response.json();

    res.json({
      id: data.id,
      status: data.status,
      next_billing_time: data.billing_info?.next_billing_time || null,
    });
  } catch (err) {
    console.error("❌ Error checking PayPal subscription:", err);
    res.status(500).json({ error: "Failed to check PayPal subscription" });
  }
});

// =======================================================
//                    LEMON SQUEEZY
// =======================================================

function lsHeaders() {
  if (!process.env.LEMON_API_KEY) {
    throw new Error("LEMON_API_KEY is not set in .env");
  }
  return {
    "Authorization": `Bearer ${process.env.LEMON_API_KEY}`,
    "Accept": "application/vnd.api+json",
  };
}

// Resolve LS subscription by order_id
// Client calls this after Checkout.Success (order_id comes from Lemon.js event)
app.get("/ls/resolve-subscription", async (req, res) => {
  const { order_id } = req.query;
  if (!order_id) return res.status(400).json({ error: "Missing order_id" });

  try {
    const response = await fetch(
      `https://api.lemonsqueezy.com/v1/subscriptions?filter[order_id]=${encodeURIComponent(order_id)}`,
      { method: "GET", headers: lsHeaders() }
    );

    
    if (!response.ok) {
      const txt = await response.text();
      console.error("LS resolve error:", response.status, txt);
      return res.status(500).json({ error: "Failed to resolve LS subscription" });
    }

    const data = await response.json();
    const first = data?.data?.[0] || null;
    const subscriptionID = first?.id || null;

    // You can also return attributes if helpful:
    // const status = first?.attributes?.status;

    return res.json({ subscriptionID });
  } catch (err) {
    console.error("❌ /ls/resolve-subscription error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});

// Check LS subscription status by subscriptionID
app.get("/check-ls-subscription", async (req, res) => {
  const { subscriptionID } = req.query;
  if (!subscriptionID) return res.status(400).json({ error: "Missing subscriptionID" });

  try {
    const response = await fetch(
      `https://api.lemonsqueezy.com/v1/subscriptions/${encodeURIComponent(subscriptionID)}`,
      { method: "GET", headers: lsHeaders() }
    );

    if (!response.ok) {
      const txt = await response.text();
      console.error("LS check error:", response.status, txt);
      return res.status(500).json({ error: "Failed to fetch LS subscription" });
    }

    const json = await response.json();
    const status = json?.data?.attributes?.status || "unknown";

    // Optional: include order_id, product info, renews_at, ends_at, etc.
    // const attributes = json?.data?.attributes;

    res.json({ status, raw: json });
  } catch (err) {
    console.error("❌ /check-ls-subscription error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});

// =======================================================
//                       MAIN PAGE
// =======================================================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "subscription.html"));
});

// =======================================================
//                     START SERVER
// =======================================================

app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);

*/















































/*
import express from "express";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// ---------- Middleware / Static ----------
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/audioes", express.static(path.join(__dirname, "audioes")));

// ---------- Firebase config (replace with your real config) ----------
app.get("/firebase-config", (req, res) => {
  res.json({
  apiKey: "AIzaSyAtKFbssJoDWHRaDsr6yHEMKJ4cz7jpI1Q",
  authDomain: "medrush-c78fb.firebaseapp.com",
  projectId: "medrush-c78fb",
  storageBucket: "medrush-c78fb.firebasestorage.app",
  messagingSenderId: "382253906640",
  appId: "1:382253906640:web:edeab544653ba45e2dbcd5",
  measurementId: "G-7W9GM9KXZK"
  });
});

// ---------- Serve JSON from /data safely ----------
app.get("/get-json/:name", (req, res) => {
  const fileName = req.params.name + ".json";
  const dataDir = path.join(__dirname, "data");
  const filePath = path.join(dataDir, fileName);

  // Prevent directory traversal
  if (!filePath.startsWith(dataDir)) {
    return res.status(400).json({ error: "Invalid path" });
  }

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Server error" });
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: "Invalid JSON file" });
    }
  });
});

// =======================================================
//                        PAYPAL
// =======================================================

// Get PayPal Access Token (SANDBOX)
async function getPayPalAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(`Failed to get PayPal access token: ${response.status} ${txt}`);
  }
  const data = await response.json();
  return data.access_token;
}

// Check PayPal Subscription Status
app.get("/check-subscription", async (req, res) => {
  const { subscriptionID } = req.query;
  if (!subscriptionID) {
    return res.status(400).json({ error: "Missing subscriptionID" });
  }

  try {
    const accessToken = await getPayPalAccessToken();

    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const txt = await response.text();
      throw new Error(`PayPal fetch failed: ${response.status} ${txt}`);
    }
    const data = await response.json();

    res.json({
      id: data.id,
      status: data.status,
      next_billing_time: data.billing_info?.next_billing_time || null,
    });
  } catch (err) {
    console.error("❌ Error checking PayPal subscription:", err);
    res.status(500).json({ error: "Failed to check PayPal subscription" });
  }
});

// =======================================================
//                    LEMON SQUEEZY
// =======================================================

function lsHeaders() {
  if (!process.env.LEMON_API_KEY) throw new Error("LEMON_API_KEY is not set in .env");
  return {
    "Authorization": `Bearer ${process.env.LEMON_API_KEY}`, // sk_test_* in Test mode
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json"
  };
}

function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }

async function lsGetJSON(url, headers) {
  const r = await fetch(url, { method: "GET", headers });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${r.status} ${txt}`);
  try { return JSON.parse(txt); } catch { return { _raw: txt }; }
}

// Try to find the API order id from identifier/order_number/user_email
async function resolveOrderId({ order_id, identifier, order_number, user_email }) {
  const headers = lsHeaders();

  // If caller already gave an API order id (numeric), try it first
  if (order_id && /^\d+$/.test(String(order_id))) return String(order_id);

  // We don't have the API id; list Orders and match by identifier or order_number
  // Narrow by email if provided to reduce scan
  const maxPages = 3; // scan a few pages just in case
  const pageSize = 25;

  for (let page = 1; page <= maxPages; page++) {
    const base = new URL("https://api.lemonsqueezy.com/v1/orders");
    base.searchParams.set("page[number]", String(page));
    base.searchParams.set("page[size]", String(pageSize));
    if (user_email) base.searchParams.set("filter[user_email]", user_email);

    const orders = await lsGetJSON(base.toString(), headers);
    const list = orders?.data || [];
    if (!Array.isArray(list) || list.length === 0) break;

    for (const o of list) {
      const attrs = o?.attributes || {};
      const matchByIdentifier  = identifier && attrs?.identifier === identifier;
      const matchByOrderNumber = (order_number != null) && Number(attrs?.order_number) === Number(order_number);
      if (matchByIdentifier || matchByOrderNumber) {
        return String(o.id); // ← this is the API order id we need
      }
    }
    if (!orders?.links?.next) break; // no more pages
  }

  return null;
}

app.get("/ls/resolve-subscription", async (req, res) => {
  const { order_id, identifier, order_number, user_email } = req.query;

  if (!order_id && !identifier && (order_number == null)) {
    return res.status(400).json({ error: "Missing order reference" });
  }

  try {
    const headers = lsHeaders();

    // 0) Ensure we have the actual API order id
    const apiOrderId = await resolveOrderId({ order_id, identifier, order_number, user_email });
    if (!apiOrderId) {
      return res.json({ subscriptionID: null, debug: { phase: "no_api_order_id" } });
    }

    // 1) Try direct by order_id with backoff (subscription may not exist immediately)
    for (let i = 0; i < 12; i++) {
      const j = await lsGetJSON(
        `https://api.lemonsqueezy.com/v1/subscriptions?filter[order_id]=${encodeURIComponent(apiOrderId)}`,
        headers
      );
      const sub = j?.data?.[0];
      if (sub?.id) return res.json({ subscriptionID: sub.id, debug: { phase: "order_id" } });
      await sleep(500 + i * 1000); // 0.5s, 1.5s, ... up to ~11.5s
    }

    // 2) Fallback: order-items -> order_item_id -> subscriptions
    const oiJSON = await lsGetJSON(
      `https://api.lemonsqueezy.com/v1/order-items?filter[order_id]=${encodeURIComponent(apiOrderId)}`,
      headers
    );
    const orderItemId = oiJSON?.data?.[0]?.id || null;

    if (orderItemId) {
      const sj = await lsGetJSON(
        `https://api.lemonsqueezy.com/v1/subscriptions?filter[order_item_id]=${encodeURIComponent(orderItemId)}`,
        headers
      );
      const sub2 = sj?.data?.[0];
      if (sub2?.id) return res.json({ subscriptionID: sub2.id, debug: { phase: "order_item_id" } });
      return res.json({ subscriptionID: null, debug: { phase: "order_item_id_empty" } });
    }

    return res.json({ subscriptionID: null, debug: { phase: "no_order_items" } });
  } catch (err) {
    console.error("❌ /ls/resolve-subscription error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});



// --- replace your /ls/resolve-subscription with this ---
function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }

async function lsGetJSON(url, headers) {
  const r = await fetch(url, { method: "GET", headers });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${r.status} ${txt}`);
  try { return JSON.parse(txt); } catch { return { _raw: txt }; }
}

app.get("/ls/resolve-subscription", async (req, res) => {
  const { order_id } = req.query;
  if (!order_id) return res.status(400).json({ error: "Missing order_id" });

  try {
    const headers = lsHeaders();

    // 0) Verify the order actually exists (and we’re in the right mode/store)
    let orderJSON = null;
    try {
      orderJSON = await lsGetJSON(
        `https://api.lemonsqueezy.com/v1/orders/${encodeURIComponent(order_id)}`,
        headers
      );
    } catch (e) {
      console.error("LS /orders/:id failed:", e.message);
      // continue; sometimes the order endpoint lags permissions; we’ll still try the others
    }

    // 1) Try direct by order_id with longer backoff (0.5s → 12s total)
    let subsJSON = null;
    let subId = null;
    for (let i = 0; i < 12; i++) {
      const j = await lsGetJSON(
        `https://api.lemonsqueezy.com/v1/subscriptions?filter[order_id]=${encodeURIComponent(order_id)}`,
        headers
      );
      subsJSON = j;
      subId = j?.data?.[0]?.id || null;
      if (subId) break;
      await sleep(500 + i * 1000); // 0.5s, 1.5s, 2.5s, ... up to ~11.5s
    }
    if (subId) {
      return res.json({ subscriptionID: subId, debug: { phase: "order_id", subs: subsJSON?.data?.length ?? 0 } });
    }

    // 2) Fallback: order-items -> order_item_id -> subscriptions
    const oiJSON = await lsGetJSON(
      `https://api.lemonsqueezy.com/v1/order-items?filter[order_id]=${encodeURIComponent(order_id)}`,
      headers
    );
    const orderItemId = oiJSON?.data?.[0]?.id || null;

    if (orderItemId) {
      const sj = await lsGetJSON(
        `https://api.lemonsqueezy.com/v1/subscriptions?filter[order_item_id]=${encodeURIComponent(orderItemId)}`,
        headers
      );
      const sub2 = sj?.data?.[0]?.id || null;
      if (sub2) {
        return res.json({
          subscriptionID: sub2,
          debug: { phase: "order_item_id", orderItems: oiJSON?.data?.length ?? 0 }
        });
      }
      return res.json({
        subscriptionID: null,
        debug: {
          phase: "order_item_id_empty",
          orderItems: oiJSON?.data?.length ?? 0,
          subsByOrderItem: sj?.data?.length ?? 0,
          orderFound: !!orderJSON?.data
        }
      });
    }

    return res.json({
      subscriptionID: null,
      debug: {
        phase: "no_order_items",
        orderFound: !!orderJSON?.data,
        subsByOrder: subsJSON?.data?.length ?? 0
      }
    });
  } catch (err) {
    console.error("❌ /ls/resolve-subscription error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});





// Check LS subscription status by subscriptionID
app.get("/check-ls-subscription", async (req, res) => {
  const { subscriptionID } = req.query;
  if (!subscriptionID) return res.status(400).json({ error: "Missing subscriptionID" });

  try {
    const response = await fetch(
      `https://api.lemonsqueezy.com/v1/subscriptions/${encodeURIComponent(subscriptionID)}`,
      { method: "GET", headers: lsHeaders() }
    );

    if (!response.ok) {
      const txt = await response.text();
      console.error("LS check error:", response.status, txt);
      return res.status(500).json({ error: "Failed to fetch LS subscription" });
    }

    const json = await response.json();
    const status = json?.data?.attributes?.status || "unknown";

    res.json({ status, raw: json });
  } catch (err) {
    console.error("❌ /check-ls-subscription error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});

// =======================================================
//                       MAIN PAGE
// =======================================================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "subscription.html"));
});

// =======================================================
//                     START SERVER
// =======================================================

app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
*/




























// server.js
import express from "express";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// ---------- Middleware / Static ----------
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/audioes", express.static(path.join(__dirname, "audioes")));

// ---------- Firebase config (replace with your real config) ----------
app.get("/firebase-config", (req, res) => {
  res.json({

    
  apiKey: "AIzaSyAtKFbssJoDWHRaDsr6yHEMKJ4cz7jpI1Q",
  authDomain: "medrush-c78fb.firebaseapp.com",
  projectId: "medrush-c78fb",
  storageBucket: "medrush-c78fb.firebasestorage.app",
  messagingSenderId: "382253906640",
  appId: "1:382253906640:web:edeab544653ba45e2dbcd5",
  measurementId: "G-7W9GM9KXZK"
 

});
});

// ---------- Serve JSON from /data safely ----------
app.get("/get-json/:name", (req, res) => {
  const fileName = req.params.name + ".json";
  const dataDir = path.join(__dirname, "data");
  const filePath = path.join(dataDir, fileName);

  // Prevent directory traversal
  if (!filePath.startsWith(dataDir)) {
    return res.status(400).json({ error: "Invalid path" });
  }

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Server error" });
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: "Invalid JSON file" });
    }
  });
});

// =======================================================
//                        PAYPAL
// =======================================================

// Get PayPal Access Token (SANDBOX)
async function getPayPalAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(`Failed to get PayPal access token: ${response.status} ${txt}`);
  }
  const data = await response.json();
  return data.access_token;
}

// Check PayPal Subscription Status
app.get("/check-subscription", async (req, res) => {
  const { subscriptionID } = req.query;
  if (!subscriptionID) {
    return res.status(400).json({ error: "Missing subscriptionID" });
  }

  try {
    const accessToken = await getPayPalAccessToken();

    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const txt = await response.text();
      throw new Error(`PayPal fetch failed: ${response.status} ${txt}`);
    }
    const data = await response.json();

    res.json({
      id: data.id,
      status: data.status,
      next_billing_time: data.billing_info?.next_billing_time || null,
    });
  } catch (err) {
    console.error("❌ Error checking PayPal subscription:", err);
    res.status(500).json({ error: "Failed to check PayPal subscription" });
  }
});

// =======================================================
//                    LEMON SQUEEZY
// =======================================================
function lsHeaders() {
  if (!process.env.LEMON_API_KEY) throw new Error("LEMON_API_KEY is not set in .env");
  return {
    "Authorization": `Bearer ${process.env.LEMON_API_KEY}`, // sk_test_* in Test mode
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json"
  };
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function getJSON(url, headers) {
  const r = await fetch(url, { method: "GET", headers });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${r.status} ${txt}`);
  try { return JSON.parse(txt); } catch { return { _raw: txt }; }
}

// Try direct filters (if the API supports them on your account)
async function tryOrderByIdentifier(identifier, headers) {
  if (!identifier) return null;
  try {
    const j = await getJSON(`https://api.lemonsqueezy.com/v1/orders?filter[identifier]=${encodeURIComponent(identifier)}`, headers);
    const id = j?.data?.[0]?.id;
    return id ? String(id) : null;
  } catch { return null; }
}
async function tryOrderByNumber(order_number, headers) {
  if (order_number == null) return null;
  try {
    const j = await getJSON(`https://api.lemonsqueezy.com/v1/orders?filter[order_number]=${encodeURIComponent(order_number)}`, headers);
    const id = j?.data?.[0]?.id;
    return id ? String(id) : null;
  } catch { return null; }
}

// Map identifier / order_number / user_email → API order id (numeric)
// If nothing is provided, it falls back to the newest order (dev-helper).
async function resolveOrderId({ order_id, identifier, order_number, user_email }) {
  const headers = lsHeaders();

  // Numeric API id already?
  if (order_id && /^\d+$/.test(String(order_id))) return String(order_id);

  // Try direct filters first (if enabled on your store)
  let id = await tryOrderByIdentifier(identifier, headers);
  if (id) return id;
  id = await tryOrderByNumber(order_number, headers);
  if (id) return id;

  // Otherwise, list orders (optionally narrowed by email), newest first
  const maxPages = 3, pageSize = 25;
  let newest = null;

  for (let page = 1; page <= maxPages; page++) {
    const base = new URL("https://api.lemonsqueezy.com/v1/orders");
    base.searchParams.set("sort", "-created_at");
    base.searchParams.set("page[number]", String(page));
    base.searchParams.set("page[size]", String(pageSize));
    if (user_email) base.searchParams.set("filter[user_email]", user_email);

    const orders = await getJSON(base.toString(), headers);
    const list = orders?.data || [];
    if (!Array.isArray(list) || list.length === 0) break;

    for (const o of list) {
      const attrs = o?.attributes || {};
      if (identifier && attrs.identifier === identifier) return String(o.id);
      if (order_number != null && Number(attrs.order_number) === Number(order_number)) return String(o.id);
      if (!newest) newest = String(o.id);
    }
    if (!orders?.links?.next) break;
  }

  return newest; // dev fallback: newest order in store
}

async function findSubscriptionId({ apiOrderId, headers, user_email }) {
  // 1) Direct by order_id with backoff
  for (let i = 0; i < 12; i++) {
    const subs = await getJSON(
      `https://api.lemonsqueezy.com/v1/subscriptions?filter[order_id]=${encodeURIComponent(apiOrderId)}`,
      headers
    );
    const sub = subs?.data?.[0];
    if (sub?.id) return String(sub.id);
    await sleep(500 + i * 1000); // 0.5s, 1.5s, ... ~11.5s
  }

  // 2) Fallback: order-items -> order_item_id -> subscriptions
  const oi = await getJSON(
    `https://api.lemonsqueezy.com/v1/order-items?filter[order_id]=${encodeURIComponent(apiOrderId)}`,
    headers
  );
  const orderItemId = oi?.data?.[0]?.id;
  if (orderItemId) {
    const subs2 = await getJSON(
      `https://api.lemonsqueezy.com/v1/subscriptions?filter[order_item_id]=${encodeURIComponent(orderItemId)}`,
      headers
    );
    const sub2 = subs2?.data?.[0];
    if (sub2?.id) return String(sub2.id);
  }

  // 3) Last resort (dev helper): scan newest subscriptions and match by email if we have it
  for (let page = 1; page <= 3; page++) {
    const base = new URL("https://api.lemonsqueezy.com/v1/subscriptions");
    base.searchParams.set("sort", "-created_at");
    base.searchParams.set("page[number]", String(page));
    base.searchParams.set("page[size]", "25");
    const subsList = await getJSON(base.toString(), headers);
    const subs = subsList?.data || [];
    if (!Array.isArray(subs) || subs.length === 0) break;

    // try to match by email in attributes if present
    if (user_email) {
      const hit = subs.find(s => {
        const a = s?.attributes || {};
        return (
          a?.user_email?.toLowerCase?.() === user_email?.toLowerCase?.() ||
          a?.customer_email?.toLowerCase?.() === user_email?.toLowerCase?.()
        );
      });
      if (hit?.id) return String(hit.id);
    }

    // if no email, just return newest subscription (dev only)
    if (!user_email && subs[0]?.id) return String(subs[0].id);
    if (!subsList?.links?.next) break;
  }

  return null;
}

// Resolve LS subscription by order reference
app.get("/ls/resolve-subscription", async (req, res) => {
  const { order_id, identifier, order_number, user_email } = req.query;

  // We proceed even if nothing is provided (dev fallback paths exist)
  try {
    const headers = lsHeaders();

    // Step A: resolve an API order id from whatever we have
    const apiOrderId = await resolveOrderId({ order_id, identifier, order_number, user_email });

    if (!apiOrderId) {
      return res.json({ subscriptionID: null, debug: { phase: "no_api_order_id", q: { order_id, identifier, order_number, user_email } } });
    }

    // Step B: try to find a subscription tied to that order (with fallbacks)
    const subscriptionID = await findSubscriptionId({ apiOrderId, headers, user_email });

    if (subscriptionID) {
      return res.json({ subscriptionID, debug: { phase: "resolved", apiOrderId } });
    } else {
      return res.json({ subscriptionID: null, debug: { phase: "not_found", apiOrderId } });
    }
  } catch (err) {
    console.error("❌ /ls/resolve-subscription error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});

// Check LS subscription status by subscriptionID
app.get("/check-ls-subscription", async (req, res) => {
  const { subscriptionID } = req.query;
  if (!subscriptionID) return res.status(400).json({ error: "Missing subscriptionID" });

  try {
    const response = await fetch(
      `https://api.lemonsqueezy.com/v1/subscriptions/${encodeURIComponent(subscriptionID)}`,
      { method: "GET", headers: lsHeaders() }
    );

    if (!response.ok) {
      const txt = await response.text();
      console.error("LS check error:", response.status, txt);
      return res.status(500).json({ error: "Failed to fetch LS subscription" });
    }

    const json = await response.json();
    const status = json?.data?.attributes?.status || "unknown";
    res.json({ status, raw: json });
  } catch (err) {
    console.error("❌ /check-ls-subscription error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});

// =======================================================
//                       MAIN PAGE
// =======================================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "subscription.html"));
});

// =======================================================
//                     START SERVER
// =======================================================
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});