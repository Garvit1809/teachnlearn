const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("../utils/appError");

const TeachingCard = require("../models/teachingCardModel");
const User = require("../models/userModel");
const TransactionHistory = require("../models/transactionHistoryModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllTeachCards = catchAsync(async (req, res, next) => {
  const curentDate = new Date();

  const features = new APIFeatures(
    TeachingCard.find({
      // classEndsAt: {
      //   // $gte: curentDate,
      // },
    }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const teachCards = await features.query;

  res.status(200).json({
    status: "success",
    teachCards,
  });
});

exports.getTeachCardOverview = catchAsync(async (req, res, next) => {
  const teachCardId = req.params.teachCardId;

  const teachCard = await TeachingCard.findById(teachCardId).select(
    "-announcemets"
  );

  if (!teachCard) {
    new AppError("No such teach card exist with that ID!");
  }

  res.status(200).json({
    status: "success",
    teachCard,
  });
});

exports.getOneTeachCard = catchAsync(async (req, res, next) => {
  const teachCardId = req.params.teachCardId;

  // check if user is enrolled

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
    tags,
  } = req.body;

  if (
    !subject &&
    !topic &&
    !programme &&
    !standard &&
    !date &&
    !preferredLanguage &&
    !cardBanner &&
    !classStartsAt &&
    !classEndsAt &&
    !description
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
    tags,
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

exports.enrollInClass = catchAsync(async (req, res, next) => {
  // get user id
  // get teach card id
  // check if user has enough coins
  // add him to the enrolled field
  // cut pay
  // add check for date

  // to be worked on
  // add check to ensure admin doesnt enroll

  const userId = req.user.id;
  const userCoins = req.user.coins;
  const teachCardId = req.params.teachCardId;

  const teachCard = await TeachingCard.findById(teachCardId);
  // const classPrice = teachCard.price;
  const teacher = teachCard.createdBy._id;

  const currentDate = new Date();
  const endDate = teachCard.classEndsAt;

  // date check
  if (endDate < currentDate) {
    return next(
      new AppError("Cannot enroll in the class, class has already ended!!")
    );
  }

  //  owner check
  if (userId == teacher) {
    return next(new AppError("Teacher cannot enroll in thier own class"));
  }

  // if any reviews left check
  const enrolledCLasses = req.user.classesEnrolled;

  enrolledCLasses.forEach((elem) => {
    if (currentDate > elem.endsAt) {
      if (!elem.isReviewed) {
        if (!elem.isCancelled) {
          return next(
            new AppError("Please review every completed class first!!")
          );
        }
      }
    }
  });

  const enrolledCheck = teachCard.studentsEnrolled.filter((student) => {
    console.log(student.id.valueOf());
    console.log(student.id.valueOf() == userId);
    return student.id.valueOf() == userId;
  });

  console.log(enrolledCheck);

  // already enrolled check
  if (enrolledCheck.length > 0) {
    return next(
      new AppError(
        "You have already enrolled in the Teaching Card!! Check the classroom!!"
      )
    );
  }

  // user credit check
  if (userCoins < 10) {
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

  const newTransaction = await TransactionHistory.create({
    paidBy: userId,
    amount: 10,
    transferredTo: teachCard.createdBy._id,
    cardEnrolled: teachCard.id,
  });

  if (!newTransaction) {
    return next(new AppError("Transaction couldnt be made!!"));
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      coins: userCoins - 10,
      $push: {
        classesEnrolled: {
          class: teachCard.id,
          isReviewed: false,
          endsAt: teachCard.classEndsAt,
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

  const updatedTeacher = await User.findByIdAndUpdate(teacher, {
    $inc: { coins: 10 },
    $push: {
      transactionHistory: newTransaction.id,
    },
  });

  if (!updatedTeacher) {
    return next(
      new AppError(
        "User couldnt be updated!! There came an error while charging the pay"
      )
    );
  }

  res.status(201).json({
    status: "success",
    updatedTeachCard,
    updatedUser,
    updatedTeacher,
  });
});

exports.cancelClass = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const teachCardId = req.params.teachCardId;

  const teachCard = await TeachingCard.findByIdAndUpdate(teachCardId, {
    hasCancelled: true,
  });
  console.log(teachCard);
  const teacher = teachCard.createdBy._id;

  // teacher check
  if (userId != teacher) {
    return next(new AppError("Only class teacher can cancel class!!"));
  }

  const currentDate = new Date();
  const endDate = teachCard.classEndsAt;

  // date check
  if (endDate < currentDate) {
    return next(
      new AppError("Cannot cancel the class, class has already ended!!")
    );
  }

  const enrolledUsers = teachCard.studentsEnrolled;
  const classPrice = 10;
  console.log(enrolledUsers);

  enrolledUsers.forEach(async (student) => {
    await User.updateOne(
      {
        _id: student._id,
        "classesEnrolled.class": teachCardId,
      },
      {
        $inc: { coins: classPrice },
        $set: {
          "classesEnrolled.$.isCancelled": true,
        },
      }
    );
  });

  const teacherCoinDecrement = classPrice * enrolledUsers.length;

  const updatedTeacher = await User.findByIdAndUpdate(teacher, {
    $inc: { coins: -teacherCoinDecrement },
  });

  res.status(200).json({
    status: "success",
    updatedTeacher,
  });
});

exports.updateClassLink = catchAsync(async (req, res, next) => {
  const { callLink } = req.body;
  const teachCardId = req.params.teachingCardId;

  const updatedClassroom = await TeachingCard.findByIdAndUpdate(
    teachCardId,
    {
      callLink,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedClassroom) {
    return next(new AppError("Couldnt update the classrrom!!"));
  }

  res.status(200).json({
    status: "success",
    updatedClassroom,
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

exports.getUpcomingClasses = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const currentDate = new Date();

  const features = new APIFeatures(
    TeachingCard.find({
      // classEndsAt: { $gte: currentDate },
      $or: [
        {
          studentsEnrolled: { $in: [userId] },
        },
        {
          createdBy: userId,
        },
      ],
    }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const upcomingClasses = await features.query;

  res.status(200).json({
    status: "success",
    upcomingClasses,
  });
});

exports.getCompletedClasses = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const currentDate = new Date();

  const features = new APIFeatures(
    TeachingCard.find({
      // classEndsAt: { $lte: currentDate },
      $or: [
        {
          studentsEnrolled: { $in: [userId] },
        },
        {
          createdBy: userId,
        },
      ],
    }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const completedClasses = await features.query;

  res.status(200).json({
    status: "success",
    completedClasses,
  });
});

exports.topTeachCards = catchAsync(async (req, res, next) => {
  const currentDate = new Date();
  console.log(currentDate);
  const stats = await TeachingCard.aggregate([
    // {
    //   $match: {
    //     classStartsAt: {
    //       $gte: currentDate,
    //     },
    //   },
    // },
    {
      $project: {
        createdBy: 1,
        subject: 1,
        topic: 1,
        programme: 1,
        standard: 1,
        preferredLanguage: 1,
        date: 1,
        classStartsAt: 1,
        classEndsAt: 1,
        // price: 1,
        studentsEnrolled: 1,
        hasCancelled: 1,
        tags: 1,
        reviews: 1,
        length: { $size: "$studentsEnrolled" },
      },
    },
    { $sort: { length: -1, date: 1 } },
    { $limit: 6 },
  ]);

  await TeachingCard.populate(stats, {
    path: "createdBy",
    select: "userName photo",
  });

  res.status(200).json({
    status: "success",
    stats,
  });
});

// exports.popularTeachCards = catchAsync(async (req, res, next) => {
//   // sort
// });
