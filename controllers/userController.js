const Feedback = require("../models/feedbackModel");
const LearningCard = require("../models/learningCardModel");
const ReportUser = require("../models/reportUser");
const Review = require("../models/reviewModel");
const TeachingCard = require("../models/teachingCardModel");
const User = require("../models/userModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const mongoose = require("mongoose");
// const ObjectId = new mongoose.Types.ObjectId();

exports.getMe = (req, res, next) => {
  req.params.userId = req.user.id;
  next();
};

// dev
exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);

exports.getOtherUser = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;

  if (!userId) {
    return next(new AppError("Please provide a user id.", 404));
  }

  const user = await User.findById(userId).select(
    "-email -phoneNumber -role -coins -forumCoins -reviewCoins -transactionHistory -favouriteUsers"
  );

  if (!user) {
    return next(new AppError("There is no user with such ID.", 404));
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

// exports.checkPassword = (req, res, next) => {
//   if (req.body.password || req.body.passwordConfirm) {
//     return next(
//       new AppError(
//         "This route is not for password updates. Please use /updateMyPassword.",
//         400
//       )
//     );
//   }
//   next();
// };

// exports.updateMe = catchAsync(async (req, res, next) => {
//   checkPassword();

//   const filteredBody = filterObj(req.body, "name", "email");

//   const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({
//     status: "success",
//     updatedUser,
//   });
// });

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.updateUserMode = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const { mode } = req.body;

  if (mode != "teach" && mode != "learn") {
    return next(new AppError("This mode is not available!!"));
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      role: mode,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    return next(new AppError("User couldnt be updated!!"));
  }

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

exports.updateUserInfo = catchAsync(async (req, res, next) => {
  const { name, tagline } = req.body;
  const userId = req.user.id;

  if (!name && !tagline) {
    return next(new AppError("Please provide sufficient data!!"));
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      name,
      tagline,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    return next(new AppError("User couldnt be updated!!"));
  }

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

exports.updateUserPhoto = catchAsync(async (req, res, next) => {
  const { photo } = req.body;
  const userId = req.user.id;

  if (!photo) {
    return next(new AppError("Please provide sufficient data!!"));
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      photo,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    return next(new AppError("User couldnt be updated!!"));
  }

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

exports.updateUserContactInfo = catchAsync(async (req, res, next) => {
  const { userName, email, phoneNumber } = req.body;
  const userId = req.user.id;

  if (!userName && !email && !phoneNumber) {
    return next(new AppError("Please provide sufficient data!!"));
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      userName,
      email,
      phoneNumber,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    return next(new AppError("User couldnt be updated!!"));
  }

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

exports.updateUserAcademicInfo = catchAsync(async (req, res, next) => {
  const {
    enrolledProgramme,
    strongSubjects,
    interestedSubjects,
    preferredLanguages,
  } = req.body;
  const userId = req.user.id;

  if (
    !enrolledProgramme &&
    !strongSubjects &&
    !interestedSubjects &&
    !preferredLanguages
  ) {
    return next(new AppError("Please provide sufficient data!!"));
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      enrolledProgramme,
      strongSubjects,
      interestedSubjects,
      preferredLanguages,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    return next(new AppError("User couldnt be updated!!"));
  }

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

exports.getUserRatings = catchAsync(async (req, res, next) => {
  const id = req.params.userId;

  if (!id) {
    return next(new AppError("Please provide user id for ratings!!"));
  }

  var userId = new mongoose.Types.ObjectId(id);

  console.log(typeof userId);
  console.log(userId);
  const stats = await Review.aggregate([
    {
      $match: { teacher: userId },
    },
    {
      $group: {
        _id: "$teacher",
        nRatings: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);
  console.log(stats);
  res.status(200).json({
    status: "success",
    stats,
  });
});

exports.postUserFeedback = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const { feedback } = req.body;

  const newFeedback = await Feedback.create({
    feedbackBy: userId,
    feedback,
  });

  if (!newFeedback) {
    return next(new AppError("Feedback cpuldnt be submitted!!"));
  }

  res.status(201).json({
    status: "success",
    newFeedback,
  });
});

exports.searchInApplication = catchAsync(async (req, res, next) => {
  const { search } = req.body;
  const userId = req.user.id;
  const currentDate = new Date();

  const modifiedSearch = new RegExp(search, "i");
  const objectId = mongoose.isObjectIdOrHexString(search);
  // console.log(objectId);

  const users = await User.find({
    $or: [
      { name: { $regex: modifiedSearch } },
      { userName: { $regex: modifiedSearch } },
      {
        strongSubjects: {
          $elemMatch: { $regex: `^${search}$`, $options: "i" },
        },
      },
      {
        interestedSubjects: {
          $elemMatch: { $regex: `^${search}$`, $options: "i" },
        },
      },
      {
        preferredLanguages: {
          $elemMatch: { $regex: `^${search}$`, $options: "i" },
        },
      },
    ],
  }).find({ _id: { $ne: userId } });

  let learnCards;
  if (objectId) {
    learnCards = await LearningCard.find({
      $or: [{ _id: search }],
    });
  } else {
    learnCards = await LearningCard.find({
      $or: [
        { subject: { $regex: modifiedSearch } },
        { topic: { $regex: modifiedSearch } },
        { programme: { $regex: modifiedSearch } },
        { description: { $regex: modifiedSearch } },
        { tags: { $elemMatch: { $regex: `^${search}$`, $options: "i" } } },
      ],
      dueDate: {
        $gte: currentDate,
      },
    });
  }

  let classes = [];
  if (objectId) {
    classes = await TeachingCard.find({
      $or: [{ _id: search }, { referredLearningCard: search }],
    });
  } else {
    classes = await TeachingCard.find({
      $or: [
        { subject: { $regex: modifiedSearch } },
        { topic: { $regex: modifiedSearch } },
        { programme: { $regex: modifiedSearch } },
        { description: { $regex: modifiedSearch } },
        { tags: { $elemMatch: { $regex: `^${search}$`, $options: "i" } } },
      ],
      classStartsAt: {
        $gte: currentDate,
      },
    });
  }

  res.status(200).json({
    status: "success",
    totalUsers: users.length,
    totalLearnCards: learnCards.length,
    totalClasses: classes.length,
    users,
    learnCards,
    classes,
  });
});

exports.getUserBalance = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const user = await User.findById(userId).select(
    "coins forumCoins reviewCoins"
  );

  if (!user) {
    return next(new AppError("No such user exists with this id"));
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

exports.getFavouriteUsers = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const userFavourites = await User.findById(userId)
    .select("favouriteUsers")
    .populate({
      path: "favouriteUsers",
      select: "name userName photo tagline",
    });

  res.status(200).json({
    status: "success",
    userFavourites,
  });
});

exports.addUserToFavourites = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const otherUserId = req.params.userId;
  console.log(otherUserId);

  if (!otherUserId) {
    return next(new AppError("Please provide the ID of user to add"));
  }

  const favouriteUsersArr = req.user.favouriteUsers;

  const isAlreadyFavourite = favouriteUsersArr.includes(otherUserId);

  let updatedUser;
  if (isAlreadyFavourite) {
    updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $pull: {
          favouriteUsers: otherUserId,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  } else {
    updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          favouriteUsers: otherUserId,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  if (!updatedUser) {
    return next(new AppError("User couldnt be updated!!"));
  }

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

exports.reportUser = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const reportedUserId = req.params.userId;
  const { feedback } = req.body;

  if (!feedback && !reportedUserId) {
    return next(new AppError("Please provide sufficient information!!"));
  }

  const report = await ReportUser.create({
    reportedBy: userId,
    reported: reportedUserId,
    feedback,
  });

  if (!report) {
    return next(new AppError("Couldnt submit user report!!"));
  }

  res.status(201).json({
    status: "success",
    report,
  });
});

// for classes created by user
exports.getMyTeachCards = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const currentDate = new Date();

  const features = new APIFeatures(
    TeachingCard.find({
      classEndsAt: { $gte: currentDate },
      createdBy: userId,
    }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const doc = await features.query;

  res.status(200).json({
    status: "success",
    totalCards: doc.length,
    myCards: doc,
  });
});

exports.getMyLearnCards = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const currentDate = new Date();

  const features = new APIFeatures(
    LearningCard.find({
      dueDate: { $gte: currentDate },
      interestedStudents: { $in: userId },
    }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const doc = await features.query;

  res.status(200).json({
    status: "success",
    totalCards: doc.length,
    myCards: doc,
  });
});

exports.getMyUnReviewedClass = catchAsync(async (req, res, next) => {
  const userClasses = req.user.classesEnrolled;
  const currentDate = new Date();

  let unreviewedClasses = [];
  let classes = [];

  userClasses.forEach((classInfo) => {
    if (!classInfo.isCancelled) {
      if (classInfo.endsAt < currentDate) {
        if (!classInfo.isReviewed) {
          classes.push(classInfo.class);
        }
      }
    }
  });

  for (let i = 0; i < classes.length; i++) {
    const card = await TeachingCard.find({ _id: classes[i] });
    unreviewedClasses.push(card[0]);
  }

  res.status(200).json({
    status: "success",
    unreviewedClasses,
  });
});
