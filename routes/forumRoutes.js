const express = require("express");
const forumController = require("../controllers/forumController");
const { protect } = require("../controllers/authController");
const forumAnswerRouter = require("./forumAnswerRoutes");

const router = express.Router();

router.use(protect);

router.use("/:forumId/answers", forumAnswerRouter);

router
  .route("/")
  .get(forumController.getAllForums)
  .post(forumController.createForum);

router
  .route("/:forumId")
  .get(forumController.getOneForum)
  .patch(forumController.upvoteForum);

router.get("/search", forumController.searchForum);

module.exports = router;
