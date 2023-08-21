const User = require('../Models/userModel');
const catchAsync=require('../utils/catchAsync');


exports.createUser = async (req, res, next) => {
            const doc = await User.create(req.body);

            res.status(201).json({
            status: 'success',
            data: {
                data: doc
            }
            });
};

