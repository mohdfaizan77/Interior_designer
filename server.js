const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from 'public' directory
app.use(express.static("public"));

// Optional: Serve your website.html at root URL
app.get("/interior", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "website.html"));
});

app.get("/rishijwellers", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "website.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
