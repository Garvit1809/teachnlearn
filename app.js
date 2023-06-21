const express = require("express");
const cors = require("cors");
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

module.exports = app;
