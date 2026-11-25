const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Moregains Services API is running."
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "Moregains Services",
    status: "healthy"
  });
});

module.exports = app;
