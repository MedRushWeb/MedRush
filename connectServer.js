import express from "express";
import { updateUnused, updateMarked, updateOriginal, updateIncorrect } from "./privateFunctions.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

// Create routes for each secret function
app.get("/updateUnused", (req, res) => res.json({ result: updateUnused() }));
app.get("/updateMarked", (req, res) => res.json({ result: updateMarked() }));
app.get("/updateOriginal", (req, res) => res.json({ result: updateOriginal() }));
app.get("/updateIncorrect", (req, res) => res.json({ result: updateIncorrect() }));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
