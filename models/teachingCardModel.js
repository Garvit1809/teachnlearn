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
      trim: true,
    },
    topic: {
      type: String,
      required: [true, "Please provide the topic to be taught"],
      trim: true,
      minlength: [
        10,
        "Topic should be briefly explained with atleast 10 characters",
      ],
    },
    programme: {
      type: String,
      required: [
        true,
        "Please provide the level of education needed on this topic",
      ],
      trim: true,
    },
    standard: {
      type: String,
      trim: true,
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
      trim: true,
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
      maxlength: [400, "Description cannot be bigger than 400 characters"],
    },
    tags: [
      {
        type: String,
        required: [true, "Please add tags in the Teach Card!!"],
        trim: true,
        maxlength: [32, "a tag cannot exceed a length of 32 characters"],
      },
    ],
    // price: {
    //   type: Number,
    //   required: [true, "Please specify the price of this class"],
    // },
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
    averageRating: {
      type: Number,
      default: 1,
      min: [1, "Rating must be above 1.0"],
      max: [10, "Rating must be below 10.0"],
      // set: (val) => Math.round(val * 10) / 10,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Review",
      },
    ],
    announcemets: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Announcement",
      },
    ],
    hasCancelled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

teachingCardSchema.pre(/^find/, function (next) {
  this.populate({
    path: "createdBy",
    select: "name photo userName",
  }).populate({
    path: "reviews",
    select: "user",
  });
  next();
});

teachingCardSchema.pre(/^findOne/, function (next) {
  this.populate({
    path: "createdBy",
    select: "name photo userName",
  })
    .populate({
      path: "studentsEnrolled",
      select: "name photo userName",
    })
    .populate({
      path: "reviews",
      select: "user",
    });
  next();
});

// teachingCardSchema.virtual("reviews", {
//   ref: "Review",
//   foreignField: "classroom",
//   localField: "_id",
// });

const TeachingCard = mongoose.model("TeachingCard", teachingCardSchema);

module.exports = TeachingCard;
