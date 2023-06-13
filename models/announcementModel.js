const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema(
  {
    classroom: {
      type: mongoose.Schema.ObjectId,
      ref: "TeachingCard",
    },
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
    },
    comments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;
