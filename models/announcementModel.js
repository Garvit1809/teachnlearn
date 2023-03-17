const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
    },
    classroom: {
      type: mongoose.Schema.ObjectId,
      ref: "Classroom",
    },
    fileUpload: {
      type: String,
      default: null,
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
