const Vote = require('../Models/voteModel');
const catchAsync=require('../utils/catchAsync');

exports.createVote = 
  catchAsync(async (req, res, next) => {
    const doc = await Vote.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });