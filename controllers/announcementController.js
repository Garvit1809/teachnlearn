const Announcement = require("../models/announcementModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exposts.restricToAdmin = () => {
  const classroomId = req.params.classroomId;
  const userClassesTaken = req.user.classesTaken;

  const restriction = !userClassesTaken.includes(classroomId);

  if (restriction) {
    return next(new AppError("User are not the admin of this classroom!!"));
  }

  next();
};

exports.getAllAnnouncements = catchAsync(async (req, res, next) => {
  const classroomId = req.params.classroomId;

  const announcements = await Announcement.find({ classroom: classroomId });

  if (!announcements) {
    return next(new AppError("Unable to get the announcements!!"));
  }

  res.status(200).json({
    status: "success",
    announcements,
  });
});

exports.postAnnouncement = catchAsync(async (req, res, next) => {
  const classroomId = req.params.classroomId;
  const userId = req.user.id;
  const { content, fileUpload } = req.body;

  const newAnnouncement = await Announcement.create({
    classroom: classroomId,
    sender: userId,
    content,
    fileUpload,
  });

  if(!newAnnouncement) {
    return next(new AppError('Announcement couldnt be created!!'))
  }

  res.status(201).json({
    status: 'success',
    newAnnouncement
  })
});
