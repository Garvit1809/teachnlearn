const mongoose = require("mongoose");

const teachingCardSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Teach Card should be created by a user!!"],
  },
  subject: {
    type: String,
    required: [true, "Please provide the subject you need to learn from"],
  },
  topic: {
    type: String,
    required: [true, "Please provide the topic to be taught"],
  },
  educationLevel: {
    type: String,
    required: [
      true,
      "Please provide the level of education needed on this topic",
    ],
  },
  standard: {
    type: String,
    required: [true, "Please provide the standard you want to teach of"],
  },
  isLearningCardReferred: {
    type: Boolean,
    default: false,
  },
  referredLearningCard: {
    type: mongoose.Schema.ObjectId,
    ref: "LearningCard",
  },
  date: {
    type: Date,
    required: [true, "Please provide date for the class"],
  },
  classStartsAt: {
    type: Date,
    required: [true, "Please provide the timing for the class start"],
  },
  classEndsAt: {
    type: Date,
    required: [true, "Please provide the timing for the class start"],
    validate: [
      function (value) {
        return this.classStartsAt <= value;
      },
    ],
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
      tag: {
        type: String,
        required: [true, "Please add tags in the Teach Card!!"]
      }
    }
  ],
  price: {
    type: Number,
    required: [true, "Please specify the price of this class"],
  },
  // seatsFilled: {
  //   type: Number,
  //   default: 0,
  // },
  studentsEnrolled: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

teachingCardSchema.pre(/^find/, function (next) {
  this.populate({
    path: "createdBy",
    select: "name",
  })
    .populate({
      path: "studentsEnrolled",
      select: "name",
    })
    .populate({
      path: "referredLearningCard",
      select: "subject createdBy",
    });
  next();
});

const TeachingCard = mongoose.model("TeachingCard", teachingCardSchema);

module.exports = TeachingCard;
