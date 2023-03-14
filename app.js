const express = require("express");
const AppError = require("./utils/appError");
const globalErrorHandler = require('./controllers/errorController');

const authRouter = require('./routes/authRoutes');
const learningRouter = require('./routes/learningCardRoutes');

const app = express();

app.use(express.json({ limit: "10kb" }));

app.get('/', (req,res) => {
  const event = new Date();
console.log(event.toString());
// Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toISOString());
res.send(event.toISOString());
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/learn', learningRouter);

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
