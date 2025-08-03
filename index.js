const express = require("express");
const cron = require("node-cron");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Home route for UptimeRobot/GitHub ping
app.get("/", (req, res) => {
  res.send("✅ Backend is alive");
});

app.get("/number", (req, res) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    res.json({
        numbers,
        message: "✅ Backend is giving outputs"
  });
});

// ✅ node-cron internal job — logs every 5 mins
cron.schedule("*/5 * * * *", () => {
  console.log(`🔁 Internal cron running at ${new Date().toLocaleTimeString()}`);
});

// Optional self-ping (useful if you're hosting outside Render):
// const axios = require("axios");
// cron.schedule("*/2 * * * *", async () => {
//   try {
//     await axios.get("https://your-app.onrender.com");
//     console.log("🔁 Self-pinged successfully");
//   } catch (err) {
//     console.error("❌ Self-ping failed", err.message);
//   }
// });

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

