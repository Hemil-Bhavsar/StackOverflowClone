const Comment = require('../Models/voteModel');
const catchAsync=require('../utils/catchAsync');

exports.createComment = 
  catchAsync(async (req, res, next) => {
    const doc = await Comment.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });