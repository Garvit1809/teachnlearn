const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

require("./models/announcementModel");
require("./models/commentModel");
require("./models/learningCardModel");
require("./models/reviewModel");
require("./models/teachingCardModel");
require("./models/userModel");
require("./models/answerModel");
require("./models/forumModel");

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const learningRouter = require("./routes/learningCardRoutes");
const teachingRouter = require("./routes/teachingCardRoutes");
const announcementRouter = require("./routes/announcementRouter");
const ForumRouter = require("./routes/forumRoutes");

dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection success"));

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/learn", learningRouter);
app.use("/api/v1/teach", teachingRouter);
app.use("/api/v1/announcement", announcementRouter);
app.use("/api/v1/forum", ForumRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err);
  console.log(err.name, err.message);
  process.exit(1);
});

// if (process.env.NODE_ENV == "production") {
//   const path = require("path");

//   app.get("/", (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "client", "dist")));
//     res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
//   });
// }

const PORT = process.env.PORT || 8000;

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
