const mongoose = require("mongoose");

const forumSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    topic: {
      type: String,
      required: [true, "A forum must have  a topic"],
    },
    question: {
      type: String,
      required: [true, "A forum must have  a question"],
    },
    upvotes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    answers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "ForumAnswer",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  { timestamps: true }
);

forumSchema.pre(/^find/, function (next) {
  this.populate({
    path: "createdBy",
    select: "name photo",
  });
  next();
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;
