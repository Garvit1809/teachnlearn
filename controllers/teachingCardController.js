const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("../utils/appError");

const TeachingCard = require("../models/teachingCardModel");
const User = require("../models/userModel");
const Classroom = require("../models/classroomModel");
const TransactionHistory = require("../models/transactionHistoryModel");

// filter cards acccoriding to their start date
exports.getAllTeachCards = factory.getAll(TeachingCard);
exports.getTeachCardOverview = factory.getOne(TeachingCard);

exports.getOneTeachCard = catchAsync(async (req, res, next) => {
  const teachCardId = req.params.teachCardId;

  const teachCard = await TeachingCard.findById(teachCardId).populate({
    path: "announcemets",
    fields: "content comments",
  });

  if (!teachCard) {
    new AppError("No such teach card exist with that ID!");
  }

  res.status(200).json({
    status: "success",
    teachCard,
  });
});

exports.createTeachCard = catchAsync(async (req, res, next) => {
  const userID = req.user.id;

  const {
    subject,
    topic,
    programme,
    standard,
    date,
    preferredLanguage,
    cardBanner,
    classStartsAt,
    classEndsAt,
    description,
    expectations,
    tags,
    price,
  } = req.body;

  if (
    !subject &&
    !topic &&
    !programme &&
    !standard &&
    !preferredLanguage &&
    !cardBanner &&
    !date &&
    !classStartsAt &&
    !classEndsAt &&
    !description &&
    !expectations &&
    !tags &&
    !price
  ) {
    return next(
      new AppError(
        "Please fill in sufficient information about the Teach Card!!"
      )
    );
  }

  const newTeachCard = await TeachingCard.create({
    createdBy: userID,
    subject,
    topic,
    programme,
    standard,
    preferredLanguage,
    cardBanner,
    isLearningCardReferred: false,
    date,
    classStartsAt,
    classEndsAt,
    description,
    expectations,
    tags,
    price,
  });

  if (!newTeachCard) {
    return next(
      new AppError("Couldnt create Teaching Card!! Something went wrong!!")
    );
  }

  const newUser = await User.findByIdAndUpdate(
    userID,
    {
      $push: { classesTaken: newTeachCard.id },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    status: "success",
    newTeachCard,
    newUser,
  });
});

// add to class
// --> ceate a class once teach card is created
// add students to teach card after theuy enroll

// to be worked on
// the class that has been completed wont be deleted from user side until he gives reviews
// add check to ensure admin doesnt enroll

exports.enrollInClass = catchAsync(async (req, res, next) => {
  // get user id
  // get teach card id
  // check if user has enough coins
  // add him to the enrolled field
  // cut pay

  const userId = req.user.id;
  const userCoins = req.user.coins;
  const teachCardId = req.params.teachCardId;

  const teachCard = await TeachingCard.findById(teachCardId);
  const classPrice = teachCard.price;

  const enrolledCheck = teachCard.studentsEnrolled.filter((student) => {
    console.log(student.id.valueOf());
    console.log(student.id.valueOf() == userId);
    return student.id.valueOf() == userId;
  });

  console.log(enrolledCheck);

  if (enrolledCheck.length > 0) {
    return next(
      new AppError(
        "You have already enrolled in the Teaching Card!! Check the classroom!!"
      )
    );
  }

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
    return next(
      new AppError(
        "Couldnt add you to class!! Try Again!! Coins havent been deducted!!"
      )
    );
  }

  const updatedClassroom = await Classroom.findOneAndUpdate(
    {
      teachingCard: teachCardId,
    },
    {
      $push: { enrolledUsers: userId },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedClassroom) {
    return next(
      new AppError("Couldnt add you to the classroom!! Some error occurred!!")
    );
  }

  const newTransaction = await TransactionHistory.create({
    paidBy: userId,
    amount: classPrice,
    transferredTo: teachCard.createdBy,
    cardEnrolled: teachCard.id,
  });

  if (!newTransaction) {
    return next(new AppError("Transaction couldnt be made!!"));
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      coins: userCoins - classPrice,
      $push: {
        classesEnrolled: {
          class: updatedClassroom.id,
          isReviewed: false,
        },
        transactionHistory: newTransaction.id,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    return next(
      new AppError(
        "User couldnt be updated!! There came an error while charging the pay"
      )
    );
  }

  res.status(201).json({
    status: "success",
    updatedTeachCard,
    updatedClassroom,
    updatedUser,
  });
});

exports.interestedInTeachCard = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const teachCardId = req.params.teachCardId;

  const teachCard = await TeachingCard.findById(teachCardId);
  const interestedStudents = teachCard.interestedStudents;
  const isAlreadyInterested = interestedStudents.includes(userId);

  if (isAlreadyInterested) {
    return next(
      new AppError(
        "User is already in the interested users for the Learn Card!!"
      )
    );
  }

  const updatedLearnCard = await LearningCard.findByIdAndUpdate(
    teachCardId,
    {
      $push: { interestedStudents: userId },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedLearnCard) {
    return next(new AppError("Learn Card couldnt be updated!! Try again!"));
  }

  res.status(200).json({
    status: "success",
    updatedLearnCard,
  });
});

exports.getUserEnrolledClasses = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const enrolledClasses = await TeachingCard.find({
    studentsEnrolled: { $in: [userId] },
  });

  res.status(200).json({
    status: "success",
    enrolledClasses,
  });
});

exports.topTeachCards = catchAsync(async (req, res, next) => {});
