const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const LearningCard = require("../models/learningCardModel");
const TeachingCard = require("../models/teachingCardModel");
const AppError = require("../utils/appError");
const Classroom = require("../models/classroomModel");

exports.getAllLearnCards = factory.getAll(LearningCard);
exports.getOneLearnCard = factory.getOne(LearningCard);
exports.getTeachCardsOnLearnCard = factory.getAll(TeachingCard);

exports.createLearnCard = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const {
    subject,
    topic,
    educationLevel,
    standard,
    preferredLanguage,
    description,
    expectations,
    dueDate,
  } = req.body;

  if (
    !subject &&
    !topic &&
    !educationLevel &&
    !standard &&
    !preferredLanguage &&
    !description &&
    !expectations &&
    !dueDate
  ) {
    return next(
      new AppError("Please provide sufficient info for the Learning Card!!")
    );
  }

  const interestedStudents = [userId];

  const newLearnCard = await LearningCard.create({
    createdBy: userId,
    subject,
    topic,
    educationLevel,
    standard,
    preferredLanguage,
    description,
    expectations,
    dueDate,
    interestedStudents
  });

  if (!newLearnCard) {
    return next(
      new AppError("Couldnt create the Learn Card!! Some error occurred!")
    );
  }

  res.status(201).json({
    status: "success",
    newLearnCard
  });
});

exports.createTeachCardOnLearnCard = catchAsync(async (req, res, next) => {
  const learnCardID = req.params.learnCardId;
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
    isLearningCardReferred: true,
    learningCardReferred: learnCardID,
    date,
    classStartsAt,
    classEndsAt,
    description,
    expectations,
    price,
  });

  if (!newTeachCard) {
    return next(new AppError("Teach Card couldnt be created, Try Again!!"));
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
    status: 'success',
    newTeachCard,
    newClassroom,
  });
});

exports.interestedInLearnCard = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const learnCardId = req.params.learnCardId;

  const learnCard = await LearningCard.findById(learnCardId);
  const interestedStudents = learnCard.interestedStudents;

  const isAlreadyInterested = interestedStudents.includes(userId);

  if (isAlreadyInterested) {
    return next(
      new AppError(
        "User is already in the interested users for the Learn Card!!"
      )
    );
  }

  const updatedLearnCard = await LearningCard.findByIdAndUpdate(
    learnCardId,
    {
      $push: { interestedStudents: userId },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedLearnCard) {
    return next(new AppError('Learn Card couldnt be updated!! Try again!'))
  }
  
  res.status(200).json({
    status: 'success',
    updatedLearnCard
  })
});
