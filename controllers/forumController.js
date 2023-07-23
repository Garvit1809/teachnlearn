const Forum = require("../models/forumModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllForums = factory.getAll(Forum);

exports.createForum = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const { topic, tagline, question } = req.body;

  const newForum = await Forum.create({
    createdBy: userId,
    topic,
    tagline,
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

exports.getOneForum = factory.getOne(Forum, {
  path: "answers",
  options: { sort: { createdAt: -1 } },
});

exports.searchForum = catchAsync(async (req, res, next) => {
  const { search } = req.body;
  console.log(search);

  const modifiedSearch = new RegExp(search, "i");

  const forums = await Forum.find({
    $or: [
      { topic: { $regex: modifiedSearch } },
      { tagline: { $regex: modifiedSearch } },
      // { "createdBy.name": { $regex: modifiedSearch } },
    ],
  });
  // .select("createdBy topic tagline");

  res.status(200).json({
    status: "success",
    results: forums.length,
    forums,
  });
});
