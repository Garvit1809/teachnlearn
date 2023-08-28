const mongoose = require("mongoose");

const defaultDueDate = 2592000000;

const learningCardSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Every leaern card must have a user!!"],
  },
  subject: {
    type: String,
    required: [true, "Please provide the subject you need to learn from"],
  },
  topic: {
    type: String,
    required: [true, "Please provide the topic you need to learn"],
    time: true,
    minlength: [10, "Topic must be of atleast 10 characters"],
  },
  programme: {
    type: String,
    required: [
      true,
      "Please provide the level of education needed on this topic",
    ],
    time: true,
  },
  standard: {
    type: String,
    time: true,
  },
  preferredLanguage: {
    type: String,
    required: [true, "Please specify the language you prefer for speaking"],
    time: true,
  },
  description: {
    type: String,
    required: [
      true,
      "Please provide a whole description for the learning card",
    ],
    maxlength: [400, "Description cannot be bigger than 400 characters"],
    time: true,
  },
  tags: [
    {
      type: String,
      required: [true, "Please add tags in the Teach Card!!"],
      time: true,
      maxlength: [32, "a tag cannot exceed a length of 32 characters"]
    },
  ],
  dueDate: {
    type: Date,
    default: new Date(+new Date() + defaultDueDate),
  },
  interestedStudents: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

learningCardSchema.pre(/^find/, function (next) {
  this.populate({
    path: "createdBy",
    select: "name photo userName",
  });
  next();
});

const LearningCard = mongoose.model("LearningCard", learningCardSchema);

module.exports = LearningCard;
