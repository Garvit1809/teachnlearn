const ForumAnswer = require("../models/answerModel");
const Forum = require("../models/forumModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createAnswer = catchAsync(async (req, res, next) => {
  const { answer } = req.body;
  const userId = req.user.id;
  const forumId = req.params.forumId;

  if (!answer) {
    return next(new AppError("Please gprovide a respose on the forum"));
  }

  const newAnswer = await ForumAnswer.create({
    answeredBy: userId,
    forum: forumId,
    answer,
  });

  if (!newAnswer) {
    return next(new AppError("Answer couldn't be created!!"));
  }

  const updateForum = await Forum.findByIdAndUpdate(
    forumId,
    {
      $push: {
        answers: newAnswer._id,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    status: "success",
    newAnswer,
    updateForum,
  });
});

exports.upvoteForum = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const answerId = req.params.answerId;

  const answer = await ForumAnswer.findById(answerId);

  if (!answer) {
    return next(new AppError("No Answer exists woth such ID!!"));
  }

  if (userId == answer.answeredBy._id) {
    return next(new AppError("Cannot upvote your own answer!!"));
  }

  const upvotesOnAnswer = answer.upvotes;

  const checkUpvoted = upvotesOnAnswer.includes(userId);

  let updatedAnswer;
  let updatedTeacher;

  if (checkUpvoted) {
    updatedAnswer = await ForumAnswer.findByIdAndUpdate(
      answerId,
      {
        $pull: {
          upvotes: userId,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    updatedTeacher = await User.findByIdAndUpdate(
      answer.answeredBy._id,
      {
        $inc: { forumCoins: -1 },
        $inc: { coins: -1 },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  } else {
    updatedAnswer = await ForumAnswer.findByIdAndUpdate(
      answerId,
      {
        $push: {
          upvotes: userId,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    updatedTeacher = await User.findByIdAndUpdate(
      answer.answeredBy._id,
      {
        $inc: { forumCoins: 1 },
        $inc: { coins: 1 },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  res.status(201).json({
    status: "success",
    updatedAnswer,
    updatedTeacher,
  });
});
