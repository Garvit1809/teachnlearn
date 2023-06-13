const express = require("express");
// const learningCardController = require("../controllers/announcementController");
const { protect } = require("../controllers/authController");
const commentRouter = require("./commentRoutes");

const router = express.Router({ mergeParams: true });

router.use(protect);
router.use("/:announcementId/comments", commentRouter);

// get announcement
// post annou

module.exports = router;
