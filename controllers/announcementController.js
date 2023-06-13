const Announcement = require("../models/announcementModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.restricToAdmin = (req, res, next) => {
  const teachingCardId = req.params.teachingCardId;
  const userClassesTaken = req.user.classesTaken;

  console.log(userClassesTaken);

  const restriction = !userClassesTaken.includes(teachingCardId);

  console.log(restriction);

  if (restriction) {
    return next(new AppError("User are not the admin of this classroom!!"));
  }

  next();
};

exports.getAllAnnouncements = catchAsync(async (req, res, next) => {
  const teachingCardId = req.params.teachingCardId;

  const announcements = await Announcement.find({ classroom: teachingCardId });

  if (!announcements) {
    return next(new AppError("Unable to get the announcements!!"));
  }

  res.status(200).json({
    status: "success",
    announcements,
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
