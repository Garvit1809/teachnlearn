const express = require("express");
const reviewController = require("../controllers/reviewController");
const { protect } = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route("/")
  .get(reviewController.getReviewsOnTeachCard)
  .post(reviewController.restrictToEnrolledUser, reviewController.postReview);

module.exports = router;
