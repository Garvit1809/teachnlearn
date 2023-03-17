const mongoose = require("mongoose");

const transactionHistorySchema = mongoose.Schema({
  amount: {
    type: Boolean,
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

const TransactionHistory = mongoose.model(
  "TransactionHistory",
  transactionHistorySchema
);

module.exports = TransactionHistory;
