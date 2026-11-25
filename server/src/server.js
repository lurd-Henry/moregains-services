require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Moregains API running on port ${PORT}`);
});

process.on("uncaughtException", (error) => {
  console.error("UNCAUGHT EXCEPTION:", error);
});

process.on("unhandledRejection", (error) => {
  console.error("UNHANDLED REJECTION:", error);
});
