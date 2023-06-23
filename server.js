const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err);
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection success"));

if (process.env.NODE_ENV == "production") {
  const path = require("path");

  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "dist")));
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

const server = app.listen(PORT, () => {
  console.log(`Server running to port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
