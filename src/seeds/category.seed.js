const { CategoryModel } = require("../models/category.model");

setTimeout( async ()=>{

    const categories = [
        {
            name: 'Electronics',
            description: 'Gadgets and electronic devices'
        },
        {
            name: 'Books',
            description: 'Various kinds of books and literature'
        },
        {
            name: 'Clothing',
            description: 'Apparel and fashion items'
        },
        {
            name: 'Home & Kitchen',
            description: 'Household and kitchen supplies'
        },
        {
            name: 'Toys & Games',
            description: 'Entertainment for children and adults'
        }
    ];

    const newCategories = await CategoryModel.insertMany(categories);

    console.log("new Categories === ", newCategories);
    
}, 1000)