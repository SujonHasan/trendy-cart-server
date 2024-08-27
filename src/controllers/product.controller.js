const ProductModel = require('../models/product.model');
const catchAsync = require('../utils/catchAsync');
const apiResponse = require('../utils/apiResponse');
const httpStatus = require('http-status');

const products = catchAsync(async (req, res) => {

    const {page, perPage, sort, categoryId, subCategoryId,} = req.query;

    let filters = {};
    let productSort = {createdAt: -1};

    if(categoryId) Object.assign(filters, {"categories._id": categoryId})
    if(subCategoryId) Object.assign(filters, {"subCategories._id": subCategoryId})

    if(sort && sort === "createdAtDesc") productSort = {createdAt: -1};
    if(sort && sort === "priceAsc") productSort = {"price.regular": 1};
    if(sort && sort === "priceDsc") productSort = {"price.regular": -1};

    const products = await ProductModel.find(filters)
                                        // .skip(perPage ? parseInt(perPage) : 10) * (parseInt(page) - 1)
                                        // .limit(perPage ? parseInt(perPage) : 10)
                                        // .sort(productSort);
    
    const total = await ProductModel.countDocuments(filters);

    const response = {
        products,
        page: parseInt(page),
        total,
        showing: products.length,
        hasMore: products.length === perPage
    };

    return apiResponse(res, httpStatus.OK, {data: response})
})

const product = catchAsync(async (req, res) => {
    
    const {_id} = req.params;

    const product = await ProductModel.findOne({_id});    

    return apiResponse(res, httpStatus.OK , {data: product});
})

module.exports = {
    products,
    product
}