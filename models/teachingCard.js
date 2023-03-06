const mongoose = require("mongoose");

const teachingCardSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  setsFilled: {
    type: Number,
    default: 0,
  },
  topic: {
    type: String,
    required: [true, "Please provide the topic to be taught"],
  },
  isLearningCardReferred: {
    type: Boolean,
    default: false,
  },
  learningCardReferred: {
    type: mongoose.Schema.ObjectId,
    ref: "LearningCard",
  },
  date: {
    type: Date,
    required: [true, "Please provide date for the Class"],
  },
});

const TeachingCard = mongoose.model("TeachingCard", teachingCardSchema);

module.exports = TeachingCard;
