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
