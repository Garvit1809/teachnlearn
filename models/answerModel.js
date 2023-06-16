const mongoose = require("mongoose");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

const forumAnswerSchema = mongoose.Schema(
  {
    answeredBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    forum: {
      type: mongoose.Schema.ObjectId,
      ref: "Forum",
    },
    answer: {
      type: String,
      required: [true, "Must give an answer"],
    },
    upvotes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

forumAnswerSchema.pre(/^find/, function (next) {
  this.populate({
    path: "answeredBy",
    select: "name photo",
  });
  next();
});

const ForumAnswer = mongoose.model("ForumAnswer", forumAnswerSchema);

module.exports = ForumAnswer;
