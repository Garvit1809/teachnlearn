const express = require("express");
const AppError = require("./utils/appError");
const globalErrorHandler = require('./controllers/errorController');
const app = express();

app.use(express.json({ limit: "10kb" }));

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

// auth complete
// teach card and learning card APIs
// Permanent Gig/Cards
// Specific Cards
// Classroom API
// review Model, APIS

// forum API
