const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const LearningCard = require("../models/learningCard");
const TeachingCard = require("../models/teachingCard");
const AppError = require("../utils/appError");

exports.getAllLearnCards = factory.getAll(LearningCard);
exports.getOneLearnCard = factory.getOne(LearningCard);
exports.createLearnCard = factory.createOne(LearningCard);
exports.getTeachCardsOnLearnCard = factory.getAll(TeachingCard);

exports.createTeachCardOnLearnCard = catchAsync(async (req, res, next) => {
  const learnCardID = req.params.id;
  const userId = req.user.id;

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

  if (!subject && !topic && !date && !classStartsAt && !classEndsAt && !description && !expectations && !price) {
    return next(new AppError('Please fill in sufficient information about the Teach Card!!'))
  }

  const teachCard = await TeachingCard.create({
    createdBy: userId,
    subject,
    topic,
    isLearningCardReferred: true,
    learningCardReferred: learnCardID,
    date,
    classStartsAt,
    classEndsAt,
    description,
    expectations,
    price
  })

  if (!teachCard) {
    return next(new AppError('Teach Card couldnt be created, Try Again!!'))
  }

  res.status(201).json({
    status: success,
    teachCard
  })
});
