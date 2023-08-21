const mongoose = require('mongoose');
const User= require('./userModel');
const Question= require('./questionModel');

const voteSchema = new mongoose.Schema(
    {
      vote: {
        type: Boolean,
        required: [true, 'Vote cannot be empty!'],
      },
      
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      question: {
        type: mongoose.Schema.ObjectId,
        ref: 'Question',
        required: [true, 'Vote must belong to a question'],
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Vote must belong to a user'],
      },
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

  const Vote = mongoose.model('Vote', voteSchema);

  module.exports =Vote;