const apiResponse = require("../utils/apiResponse")
const catchAsync = require("../utils/catchAsync")
const httpStatus = require('http-status');

const baseUrl = catchAsync(async (req, res) => {

    return apiResponse(res, httpStatus.OK, {message: "Welcome to home Page"});
})

module.exports  = {
    baseUrl
}