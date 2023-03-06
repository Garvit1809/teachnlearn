const mongoose = require("mongoose");

const defaultDueDate = 2592000000;

const learningCardSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  topic: {
    type: String,
    required: [true, "Please provide the topic you need to learn"],
  },
  dueDate: {
    type: Date,
    default: defaultDueDate,
  },
  interestedStudents: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  degree: {
    type: String,
    required: [true, 'Please provide the level of education needed on this topic']
  },
});

const LearningCard = mongoose.model("LearningCard", learningCardSchema);

module.exports = LearningCard;
