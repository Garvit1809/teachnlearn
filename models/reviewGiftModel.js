const mongoose = require("mongoose");

const reviewGiftSchema = mongoose.Schema({
  reviewFrom: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  amount: {
    type: Number,
    required: [true, "Please specify the amount that has been transferred!!"],
  },
  transferredTo: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  cardEnrolled: {
    type: mongoose.Schema.ObjectId,
    ref: "TeachingCard",
  },
});

const ReviewGift = mongoose.model("ReviewGift", reviewGiftSchema);

module.exports = ReviewGift;
