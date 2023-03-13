const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    enrolledUsers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    teachingCard: {
      type: mongoose.Schema.ObjectId,
      ref: "TeachingCard",
    },
    chatName: {
      type: String,
      required: [
        true,
        "Chat Name must be the same as of the Teaching Card title",
      ],
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
    callLink: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

// reviews --> reference

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
