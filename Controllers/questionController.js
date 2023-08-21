const Question= require('../Models/questionModel');
const catchAsync=require('../utils/catchAsync');

exports.deleteQuestion =
  catchAsync(async (req, res, next) => {
    const doc = await Question.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.updateQuestion = Question =>
  catchAsync(async (req, res, next) => {
    const doc = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.createQuestion = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Question.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });


  exports.getAllQuestions = 
  catchAsync(async (req, res, next) => {
    
    const questions = await Question.find();

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: questions.length,
      data: {
        questions
      }
    });
  });