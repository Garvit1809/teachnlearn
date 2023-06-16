const Announcement = require("../models/announcementModel");
const Comment = require("../models/commentModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllComments = catchAsync(async (req, res, next) => {
  const announcementId = req.params.announcementId;

  const comments = await Comment.find({ announcement: announcementId });

  res.status(200).json({
    status: "success",
    comments,
  });
});

exports.postComment = catchAsync(async (req, res, next) => {
  const announcementId = req.params.announcementId;
  const userId = req.user.id;
  const { content } = req.body;

  const newComment = await Comment.create({
    author: userId,
    content,
    announcement: announcementId,
  });

  if (!newComment) {
    return next(new AppError("Comment couldnt be created!!"));
  }

  const updateAnnouncement = await Announcement.findByIdAndUpdate(
    announcementId,
    {
      $push: {
        comments: newComment.id,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    status: "success",
    newComment,
    updateAnnouncement,
  });
});
