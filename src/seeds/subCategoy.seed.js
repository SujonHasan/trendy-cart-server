const { CategoryModel } = require("../models/category.model");
const { SubCategoryModel } = require("../models/subCategory.model");

const subCategoriesData = {
    'Electronics': ["Mobile Phones", "Laptops", "Cameras"],
    'Fashion': ["Men's Clothing", "Women's Clothing", "Accessories"],
    'Home & Kitchen': ["Furniture", "Kitchen Appliances", "Decor"],
    'Sports & Outdoors': ["Fitness Equipment", "Camping Gear", "Sportswear"],
    'Books': ["Fiction", "Non-Fiction", "Children's Books"],
    'Beauty & Personal Care': ["Skincare", "Haircare", "Makeup"],
    'Automotive': ["Car Accessories", "Motorbike Accessories", "Tires"],
    'Toys & Games': ["Board Games", "Action Figures", "Educational Toys"],
    'Health & Wellness': ["Supplements", "Fitness Trackers", "Personal Care"],
    'Computers & Accessories': ["Desktops", "Monitors", "Computer Accessories"],
    'Office Supplies': ["Printers", "Stationery", "Office Furniture"],
    'Baby Products': ["Diapers", "Baby Clothing", "Baby Toys"],
    'Grocery': ["Fruits & Vegetables", "Snacks", "Beverages"],
    'Pet Supplies': ["Pet Food", "Pet Toys", "Grooming"],
    'Gaming': ["Consoles", "Video Games", "Gaming Accessories"]
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