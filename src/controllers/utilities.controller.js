const { CategoryModel } = require('../models/category.model');
const { SubCategoryModel } = require('../models/subCategory.model');
const apiResponse = require('../utils/apiResponse');
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const categories = catchAsync( async (req, res) => {
    
    const categories = await CategoryModel.find({}, {name: true, photo: true});

    return apiResponse(res, httpStatus.OK, {data: categories});
})

const subCategories = catchAsync( async (req, res) => {

    const {categoryId} = req.params;
    
    const condition ={};

    categoryId ?  Object.assign(condition, {"category._id": categoryId})  : null; 

    const subCategories = await SubCategoryModel.find(condition, {name: true});

    return apiResponse(res, httpStatus.OK, {data: subCategories});
})

module.exports = {
    categories,
    subCategories
}