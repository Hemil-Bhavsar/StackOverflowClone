const mongoose = require('mongoose');
const validator = require('validator');

const commentSchema = new mongoose.Schema(
    {
      comment: {
        type: String,
        required: [true, 'Review cannot be empty!'],
      },
      
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      question: {
        type: mongoose.Schema.ObjectId,
        ref: 'Question',
        required: [true, 'Comment must belong to a question'],
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Comment must belong to a user'],
      },
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

  const Comment = mongoose.model('Comment', commentSchema);

  module.exports =Comment;