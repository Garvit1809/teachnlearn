const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    feedbackBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    feedback: {
      type: String,
      required: [true, "User must provide some feedback"],
    },
  },
  { timestamps: true }
);

feedbackSchema.pre(/^find/, function (next) {
  this.populate({
    path: "feedbackBy",
    select: "name userName",
  });
  next();
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
