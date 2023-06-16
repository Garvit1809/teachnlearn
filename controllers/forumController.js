const Forum = require("../models/forumModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllForums = factory.getAll(Forum);

exports.createForum = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const { topic, question } = req.body;

  const newForum = await Forum.create({
    createdBy: userId,
    topic,
    question,
  });

  if (!newForum) {
    return next(new AppError("Forum couldn't be created!!"));
  }

  res.status(201).json({
    status: "success",
    newForum,
  });
});

exports.upvoteForum = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const forumId = req.params.forumId;

  const forum = await Forum.findById(forumId);

  if (!forum) {
    return next(new AppError("No forum exists woth such ID!!"));
  }

  const upvotesOnForum = forum.upvotes;

  const checkUpvoted = upvotesOnForum.includes(userId);

  let updatedForum;

  if (checkUpvoted) {
    updatedForum = await Forum.findByIdAndUpdate(
      forumId,
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
  } else {
    updatedForum = await Forum.findByIdAndUpdate(
      forumId,
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
  }

  res.status(201).json({
    status: "success",
    updatedForum,
  });
});

exports.getOneForum = factory.getOne(Forum, "answers");
// exports.getOneForum = catchAsync(async (req, res, next) => {
//   const forumId = req.params.forumId;

//   const forum = await Forum.findById(forumId).populate({ path: "answers" });

//   res.status(200).json({
//     status: "success",
//     forum,
//   });
// });