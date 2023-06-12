const mongoose = require("mongoose");

const teachingCardSchema = new mongoose.Schema(
  {
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
      min: [30, "Topic should be briefly explained with 30 characters"],
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
    preferredLanguage: {
      type: String,
      required: [true, "Please specify the language you prefer for teaching"],
    },
    cardBanner: {
      type: String,
      required: [true, "Please provide a class banner image"],
    },
    date: {
      type: Date,
      required: [true, "Please provide date for the class"],
    },
    classStartsAt: {
      type: String,
      required: [true, "Please provide the timing for the class start"],
    },
    classEndsAt: {
      type: String,
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
        type: String,
        required: [true, "Please add tags in the Teach Card!!"],
      },
    ],
    price: {
      type: Number,
      required: [true, "Please specify the price of this class"],
    },
    interestedStudents: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    studentsEnrolled: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    callLink: {
      type: String,
      default: null,
    },
    announcemets: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Announcement",
      },
    ],
  },
  { timestamps: true }
);

teachingCardSchema.pre(/^find/, function (next) {
  this.populate({
    path: "createdBy",
    select: "name photo",
  })
    .populate({
      path: "studentsEnrolled",
      select: "name photo",
    })
    .populate({
      path: "referredLearningCard",
      select: "subject topic createdBy",
    });
  next();
});

const TeachingCard = mongoose.model("TeachingCard", teachingCardSchema);

module.exports = TeachingCard;
