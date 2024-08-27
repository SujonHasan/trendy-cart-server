const { CategoryModel } = require("../models/category.model");
const { SubCategoryModel } = require("../models/subCategory.model");

const subCategoriesData = {
    'Electronics': ['Mobile Phones', 'Laptops', 'Cameras'],
    'Books': ['Fiction', 'Non-Fiction', 'Comics'],
    'Clothing': ['Men\'s Clothing', 'Women\'s Clothing', 'Kids\' Clothing'],
    'Home & Kitchen': ['Furniture', 'Appliances', 'Cookware'],
    'Toys & Games': ['Board Games', 'Action Figures', 'Puzzles']
};

setTimeout( async() => {

    const categories = await CategoryModel.find({}, {name: true});

    // console.log("categories ===  ", categories);

    for(let categorie of categories){

        const subCategories = subCategoriesData[categorie.name].map(subCategoryName => ({
            name: subCategoryName,
            category: {_id: categorie._id, name: categorie.name}
        }))

        await SubCategoryModel.insertMany(subCategories);

        console.log("subCategories == ", subCategories);
        
    }

}, 1000)