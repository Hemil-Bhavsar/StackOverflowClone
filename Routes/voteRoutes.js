const express = require('express');
const voteController=require('../Controllers/voteController');

const router=express.Router();

router.route('/').post(voteController.createVote);

module.exports =router;
