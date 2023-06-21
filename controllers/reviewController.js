const Review = require("../models/reviewModel");
const TeachingCard = require("../models/teachingCardModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getReviewsOnTeachCard = catchAsync(async (req, res, next) => {
  const teachCardId = req.params.teachingCardId;

  console.log(teachCardId);

  const reviews = await Review.find({ classroom: teachCardId });

  console.log(reviews);

  res.status(200).json({
    status: "success",
    reviews,
  });
});

exports.restrictToEnrolledUser = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const teachCardId = req.params.teachingCardId;

  const teachCard = await TeachingCard.findById(teachCardId);

  const enrolledStudents = teachCard.studentsEnrolled;
  const isEnrolled = enrolledStudents.filter((student) => {
    return student._id == userId;
  });

  // console.log(enrolledStudents);
  // console.log(isEnrolled);

  if (isEnrolled.length == 0) {
    new AppError("User is not enrolled in the classroom!!");
  }

  next();
});

exports.postReview = catchAsync(async (req, res, next) => {
  const teachCardId = req.params.teachingCardId;
  const userId = req.user.id;

  const { review, rating, teacherID } = req.body;

  // check if user is enrolled in class
  //  update user model review -> true

  if (!review || !rating || !teacherID) {
    new AppError("Not sufficient data to create review!!");
  }

  const newReview = await Review.create({
    review,
    rating,
    classroom: teachCardId,
    teacher: teacherID,
    user: userId,
  });

  if (!newReview) {
    new AppError("Review couldnt be created!!");
  }

  res.status(201).json({
    status: "success",
    newReview,
  });
});
