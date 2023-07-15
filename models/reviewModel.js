const mongoose = require("mongoose");
const TeachingCard = require("./teachingCardModel");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can not be empty!"],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, "User must provide a rating to teacher"],
      min: [1, "Rating must be above 1.0"],
      max: [10, "Rating must be below 10.0"],
    },
    classroom: {
      type: mongoose.Schema.ObjectId,
      ref: "TeachingCard",
      required: [true, "Review must belong to a Classroom."],
    },
    teacher: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must be for a User."],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a User"],
    },
  },
  { timestamps: true },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ classroom: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});

reviewSchema.statics.calculateAverageRatings = async function (teachingCardId) {
  console.log(typeof teachingCardId);
  console.log(teachingCardId);
  const stats = await this.aggregate([
    {
      $match: { classroom: teachingCardId },
    },
    {
      $group: {
        _id: "$classroom",
        nRatings: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);
  console.log(stats[0]);
  await TeachingCard.findByIdAndUpdate(
    teachingCardId,
    {
      averageRating: stats[0].avgRating,
      ratingQuantity: stats[0].nRatings,
    },
    {
      new: true,
      runValidators: true,
    }
  );
};

reviewSchema.post("save", function () {
  this.constructor.calculateAverageRatings(this.classroom);
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
