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
