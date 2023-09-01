const mongoose = require("mongoose");

const reportUserSchema = mongoose.Schema(
  {
    reportedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    reported: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    feedback: {
      type: String,
      required: [true, "User must provide some feedback"],
      trim: true,
    },
  },
  { timestamps: true }
);

reportUserSchema.pre(/^find/, function (next) {
  this.populate({
    path: "reportedBy",
    select: "name userName email",
  }).populate({
    path: "reported",
    select: "name userName email",
  });
  next();
});

const ReportUser = mongoose.model("ReportUser", reportUserSchema);

module.exports = ReportUser;
