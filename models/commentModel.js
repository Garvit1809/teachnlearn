const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    trim: true,
    required: [true, "Please provide the comment content!!"],
  },
});

const Comment = mongoose.model("Comment", messageSchema);

module.exports = Comment;
