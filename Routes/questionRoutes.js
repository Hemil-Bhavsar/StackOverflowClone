const express = require("express");
const questionController = require("../Controllers/questionController");

const router = express.Router();

router
  .route("/")
  .get(questionController.getAllQuestions)
  .delete(questionController.deleteQuestion)
  .post(questionController.createQuestion);

module.exports = router;
