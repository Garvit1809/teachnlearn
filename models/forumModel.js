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
    tagline: {
      type: String,
      required: [true, "A forum must have a short tagline"],
      maxLength: [250, "Tagline mustnt be more than 250 characters!!"],
      trim: true,
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
  { timestamps: true }
);

forumSchema.pre(/^find/, function (next) {
  this.populate({
    path: "createdBy",
    select: "userName",
  });
  next();
});

forumSchema.pre(/^findOne/, function (next) {
  this.populate({
    path: "createdBy",
    select: "name photo userName",
  });
  next();
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;
