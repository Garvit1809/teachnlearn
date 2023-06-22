const Review = require("../models/reviewModel");
const TeachingCard = require("../models/teachingCardModel");
const User = require("../models/userModel");
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

  const date = new Date();

  // date check
  if (date < teachCard.classEndsAt) {
    return next(
      new AppError("Class hasnt ended yet, cannot give review yet!!")
    );
  }

  // teacher check
  if (userId == teachCard.createdBy._id) {
    return next(new AppError("Teacher cannot review themself!!"));
  }

  // enrolled user check
  const enrolledStudents = teachCard.studentsEnrolled;
  const isEnrolled = enrolledStudents.filter((student) => {
    return student._id == userId;
  });

  if (isEnrolled.length == 0) {
    new AppError("User is not enrolled in the classroom!!");
  }

  // check if already reviewed
  const reviews = teachCard.reviews;
  const filteredArr = reviews.filter((review) => {
    return review.user._id == userId;
  });

  if (filteredArr.length != 0) {
    return next(new AppError("User has already given review!!"));
  }

  next();
});

exports.postReview = catchAsync(async (req, res, next) => {
  const teachCardId = req.params.teachingCardId;
  const userId = req.user.id;

  const { review, rating, teacherID } = req.body;

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

  const updateTeachCard = await TeachingCard.findByIdAndUpdate(
    teachCardId,
    {
      $push: {
        reviews: newReview._id,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  const updatedUser = await User.updateOne(
    {
      _id: userId,
      "classesEnrolled.class": teachCardId,
    },
    {
      $set: {
        "classesEnrolled.$.isReviewed": true,
      },
    }
  );

  res.status(201).json({
    status: "success",
    newReview,
    updateTeachCard,
    updatedUser,
  });
});
