const Announcement = require("../models/announcementModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.restricToAdmin = (req, res, next) => {
  const teachingCardId = req.params.teachingCardId;
  const userClassesTaken = req.user.classesTaken;

  console.log(userClassesTaken);

  const restriction = !userClassesTaken.includes(teachingCardId);

  console.log(restriction);

  if (restriction) {
    return next(new AppError("User is not the admin of this classroom!!"));
  }

  next();
};

exports.getAllAnnouncements = catchAsync(async (req, res, next) => {
  const teachingCardId = req.params.teachingCardId;

  const docs = new APIFeatures(
    Announcement.find({ classroom: teachingCardId }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const doc = await docs.query;

  res.status(200).json({
    status: "success",
    announcements: doc
  });
});

exports.postAnnouncement = catchAsync(async (req, res, next) => {
  const teachingCardId = req.params.teachingCardId;
  const userId = req.user.id;
  const { content } = req.body;

  const newAnnouncement = await Announcement.create({
    classroom: teachingCardId,
    sender: userId,
    content,
  });

  if (!newAnnouncement) {
    return next(new AppError("Announcement couldnt be created!!"));
  }

  res.status(201).json({
    status: "success",
    newAnnouncement,
  });
});
