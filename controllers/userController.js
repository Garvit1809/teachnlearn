const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getMe = (req, res, next) => {
  req.params.userId = req.user.id;
  next();
};

// dev
exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);

exports.getOtherUser = catchAsync(async (req,res,next) => {
  const userId = req.params.userId;

  if (!userId) {
    return next(new AppError("Please provide a user id.", 404));
  }

  const user = await User.findById(userId).select('-role -classesEnrolled');

  if (!user) {
    return next(new AppError("There is no user with such ID.", 404));
  }

  res.status(200).json({
    status: 'success',
    user
  })
})

exports.checkPassword = (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  checkPassword();

  const filteredBody = filterObj(req.body, "name", "email");

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: "success",
    data: null,
  });
});
