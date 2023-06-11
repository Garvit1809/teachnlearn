const mongoose = require("mongoose");

const defaultDueDate = 2592000000;

const learningCardSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  subject: {
    type: String,
    required: [true, "Please provide the subject you need to learn from"],
  },
  topic: {
    type: String,
    required: [true, "Please provide the topic you need to learn"],
  },
  programme: {
    type: String,
    required: [
      true,
      "Please provide the level of education needed on this topic",
    ],
  },
  standard: {
    type: String,
    required: [true, "Please provide the standard you want to be taught of"],
  },
  preferredLanguage: {
    type: String,
    required: [true, "Please specify the language you prefer for speaking"],
  },
  description: {
    type: String,
    required: [
      true,
      "Please provide a whole description for the learning card",
    ],
  },
  expectations: [
    {
      type: String,
      required: [true, "Please provide what you expect from the tutor"],
    },
  ],
  tags: [
    {
      type: String,
      required: [true, "Please add tags in the Teach Card!!"],
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
    select: "name",
  });
  next();
});

const LearningCard = mongoose.model("LearningCard", learningCardSchema);

module.exports = LearningCard;
