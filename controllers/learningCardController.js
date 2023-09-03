const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const LearningCard = require("../models/learningCardModel");
const TeachingCard = require("../models/teachingCardModel");
const AppError = require("../utils/appError");
const User = require("../models/userModel");

exports.getAllLearnCards = factory.getAll(LearningCard);
exports.getOneLearnCard = factory.getOne(LearningCard);
exports.getTeachCardsOnLearnCard = factory.getAll(TeachingCard);

exports.createLearnCard = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const {
    subject,
    topic,
    programme,
    standard,
    preferredLanguage,
    description,
    expectations,
    tags,
    dueDate,
  } = req.body;

  if (
    !subject &&
    !topic &&
    !programme &&
    !standard &&
    !preferredLanguage &&
    !description &&
    !expectations &&
    !tags &&
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
    programme,
    standard,
    preferredLanguage,
    description,
    expectations,
    tags,
    dueDate,
    interestedStudents,
  });

  if (!newLearnCard) {
    return next(
      new AppError("Couldnt create the Learn Card!! Some error occurred!")
    );
  }

  res.status(201).json({
    status: "success",
    newLearnCard,
  });
});

exports.createTeachCardOnLearnCard = catchAsync(async (req, res, next) => {
  const learnCardID = req.params.learnCardId;
  const userID = req.user.id;

  const {
    subject,
    topic,
    programme,
    standard,
    preferredLanguage,
    cardBanner,
    date,
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
    !preferredLanguage &&
    !cardBanner &&
    !date &&
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
    isLearningCardReferred: true,
    referredLearningCard: learnCardID,
    date,
    classStartsAt,
    classEndsAt,
    description,
    tags,
  });

  if (!newTeachCard) {
    return next(new AppError("Teach Card couldnt be created, Try Again!!"));
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

exports.interestedInLearnCard = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const learnCardId = req.params.learnCardId;

  const learnCard = await LearningCard.findById(learnCardId);
  const interestedStudents = learnCard.interestedStudents;

  const isAlreadyInterested = interestedStudents.includes(userId);

  let updatedLearnCard;
  if (isAlreadyInterested) {
    updatedLearnCard = await LearningCard.findByIdAndUpdate(
      learnCardId,
      {
        $pull: { interestedStudents: userId },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  } else {
    updatedLearnCard = await LearningCard.findByIdAndUpdate(
      learnCardId,
      {
        $push: { interestedStudents: userId },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  if (!updatedLearnCard) {
    return next(new AppError("Learn Card couldnt be updated!! Try again!"));
  }

  res.status(200).json({
    status: "success",
    updatedLearnCard,
  });
});

exports.topLearnCards = catchAsync(async (req, res, next) => {
  const currentDate = new Date();
  const stats = await LearningCard.aggregate([
    {
      $match: {
        dueDate: {
          $gte: currentDate,
        },
      },
    },
    {
      $project: {
        createdBy: 1,
        subject: 1,
        topic: 1,
        programme: 1,
        preferredLanguage: 1,
        description: 1,
        expectations: 1,
        tags: 1,
        dueDate: 1,
        interestedStudents: 1,
        length: { $size: "$interestedStudents" },
      },
    },
    { $sort: { length: -1, date: 1 } },
    { $limit: 6 },
  ]);

  await LearningCard.populate(stats, {
    path: "createdBy",
    select: "name photo userName",
  });

  res.status(200).json({
    status: "success",
    stats,
  });
});
