const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can not be empty!"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    classroom: {
      type: mongoose.Schema.ObjectId,
      ref: "TeachingCard",
      required: [true, "Review must belong to a Classroom."],
    },
    teacher: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a User."],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"],
    },
  },
  { timestamps: true },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  }).populate({
    path: "teacher",
    select: "name photo",
  });
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
