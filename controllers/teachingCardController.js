const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("../utils/appError");

const LearningCard = require("../models/learningCard");
const TeachingCard = require("../models/teachingCard");
const User = require("../models/userModel");

exports.getAllTeachCards = factory.getAll(TeachingCard);
exports.getOneTeachCard = factory.getOne(TeachingCard);
exports.createTeachCard = factory.createOne(TeachingCard);

// add to class
// --> ceate a class once teach card is created
// add students to teach card after theuy enroll

// the class that has been completed wont be deleted from user side until he gives reviews


exports.enrollInClass = catchAsync(async (req, res, next) => {
  // get user id
  // get teach card id
  // get user profile
  // check if user has enough coins
  // add him to the enrolled field
  // cut pay

  const teachCardId = req.params.id;

  const userId = req.user.id;
  const userCoins = req.user.coins;

  const teachCard = await TeachingCard.findById(teachCardId);
  const classPrice = teachCard.price;

  if (userCoins < classPrice) {
    return next(
      new AppError("User doent have enough coins for attending this class!!")
    );
  }

  const updatedTeachCard = await TeachingCard.findByIdAndUpdate(
    teachCardId,
    {
      $push: { studentsEnrolled: userId },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedTeachCard) {
    return next(new AppError('Couldnt add you to class!! Try Again!! Coins havent been deducted!!'))
  }

  const updatedUser = await User.findByIdAndUpdate(userId, {
    coins: userCoins - classPrice,
    $push: { classesEnrolled: teachCard.id }
  });

  if (!updatedUser) {
    return next(new AppError('User couldnt be updated!! There came an error while charging the pay'))
  }

  res.status(201).json({
    status: 'success',
    teachCard,
    updatedTeachCard,
    updatedUser
  })
});
