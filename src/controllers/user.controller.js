const { Usermodel } = require("../models/user.model");
const apiResponse = require("../utils/apiResponse");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require('http-status');

const getUser = catchAsync( async (req, res) => {
    
    const user = await Usermodel.findById({_id: req.user._id});
        
    apiResponse(res, httpStatus.OK, {data: user});
} )

module.exports = {
    getUser
}