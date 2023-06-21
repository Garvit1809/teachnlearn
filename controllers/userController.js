const Review = require("../models/reviewModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

const mongoose = require("mongoose");

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
    "-role -classesEnrolled -coins"
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
  const { name, tagline, photo } = req.body;
  const userId = req.user.id;

  if (!name && !tagline && !photo) {
    return next(new AppError("Please provide sufficient data!!"));
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      name,
      tagline,
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
    totalRatings: stats[0].nRatings,
    avgRating: stats[0].avgRating,
  });
});
