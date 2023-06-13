const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    trim: true,
    required: [true, "Please provide the comment content!!"],
  },
  announcement: {
    type: mongoose.Schema.ObjectId,
    ref: "Announcement",
  },
});

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "author",
    select: "name photo",
  });
  next();
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
