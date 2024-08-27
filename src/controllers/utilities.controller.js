const { CategoryModel } = require('../models/category.model');
const apiResponse = require('../utils/apiResponse');
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const categories = catchAsync( async (req, res) => {
    
    const categories = await CategoryModel.find({}, {name: true, photo: true});

    return apiResponse(res, httpStatus.OK, {data: categories});
})

module.exports = {
    categories
}