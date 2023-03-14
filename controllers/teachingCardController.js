const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("../utils/appError");

const TeachingCard = require("../models/teachingCardModel");
const User = require("../models/userModel");
const Classroom = require("../models/classroomModel");

// filter cards acccoriding to their start date
exports.getAllTeachCards = factory.getAll(TeachingCard);

exports.getOneTeachCard = factory.getOne(TeachingCard);

exports.createTeachCard = catchAsync(async (req, res, next) => {
  const userID = req.user.id;

  const {
    subject,
    topic,
    date,
    classStartsAt,
    classEndsAt,
    description,
    expectations,
    price,
  } = req.body;

  if (
    !subject &&
    !topic &&
    !date &&
    !classStartsAt &&
    !classEndsAt &&
    !description &&
    !expectations &&
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
    isLearningCardReferred: false,
    date,
    classStartsAt,
    classEndsAt,
    description,
    expectations,
    price,
  });

  if (!newTeachCard) {
    return next(
      new AppError("Couldnt create Teaching Card!! Something went wrong!!")
    );
  }

  const newClassroom = await Classroom.create({
    admin: userID,
    teachingCard: newTeachCard.id,
    chatName: newTeachCard.topic,
    classStartsAt: newTeachCard.classStartsAt,
    classEndsAt: newTeachCard.classEndsAt,
  });

  if (!newClassroom) {
    return next(
      new AppError("Couldnt create the classroom!! Please file a report!")
    );
  }

  res.status(201).json({
    status: "success",
    newTeachCard,
    newClassroom,
  });
});

// add to class
// --> ceate a class once teach card is created
// add students to teach card after theuy enroll

// to be worked on
// the class that has been completed wont be deleted from user side until he gives reviews

exports.enrollInClass = catchAsync(async (req, res, next) => {
  // get user id
  // get teach card id
  // get user profile
  // check if user has enough coins
  // add him to the enrolled field
  // cut pay

  const teachCardId = req.params.teachCardId;

  const userId = req.user.id;
  const userCoins = req.user.coins;

  const teachCard = await TeachingCard.findById(teachCardId);
  const classPrice = teachCard.price;

  const enrolledCheck = teachCard.studentsEnrolled.forEach((student) => {
    console.log(student.id.valueOf());
    // return student._id == userId;
    return student.id.valueOf() == userId;

  });

  // console.log(teachCard.studentsEnrolled);
  console.log(enrolledCheck);

  if (enrolledCheck) {
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
      $inc: { seatsFilled: 1 },
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

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      coins: userCoins - classPrice,
      $push: {
        classesEnrolled: {
          class: updatedClassroom.id,
          isReviewed: false,
        },
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
