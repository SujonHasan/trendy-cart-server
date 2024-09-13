const apiResponse = require("../utils/apiResponse");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require('http-status');

const getUser = catchAsync( async (req, res) => {
    
    apiResponse(res, httpStatus.OK, {data: req.user});
} )

module.exports = {
    getUser
}