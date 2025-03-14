require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve Frontend (React) setelah build
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/api/message", (req, res) => {
    res.json({ message: "Halo dari Backend!" });
});

// Untuk menangani semua route yang tidak dikenal
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
