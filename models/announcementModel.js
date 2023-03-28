const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema(
  {
    classroom: {
      type: mongoose.Schema.ObjectId,
      ref: "Classroom",
    },
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
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
