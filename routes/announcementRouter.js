const express = require("express");
const announcementController = require("../controllers/announcementController");
const { protect } = require("../controllers/authController");
const commentRouter = require("./commentRoutes");

const router = express.Router({ mergeParams: true });

router.use(protect);
router.use("/:announcementId/comments", commentRouter);

router
  .route("/")
  .get(announcementController.getAllAnnouncements)
  .post(
    announcementController.restricToAdmin,
    announcementController.postAnnouncement
  );

module.exports = router;
