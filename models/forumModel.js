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
      maxlength: [25, "Tagline mustn't be more than 25 characters!!"],
      trim: true,
    },
    tagline: {
      type: String,
      required: [true, "A forum must have a short tagline"],
      maxlength: [250, "Tagline mustn't be more than 250 characters!!"],
      trim: true,
    },
    question: {
      type: String,
      required: [true, "A forum must have a question"],
      trim: true,
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
  { timestamps: true }
);

forumSchema.pre(/^find/, function (next) {
  this.populate({
    path: "createdBy",
    select: "name photo userName",
  });
  next();
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;
