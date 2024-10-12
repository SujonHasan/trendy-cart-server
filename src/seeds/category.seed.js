const { CategoryModel } = require("../models/category.model");

setTimeout( async ()=>{

    const categories = [
        {
            name: "Electronics"
          },
          {
            name: "Fashion"
          },
          {
            name: "Home & Kitchen"
          },
          {
            name: "Sports & Outdoors"
          },
          {
            name: "Books"
          },
          {
            name: "Beauty & Personal Care"
          },
          {
            name: "Automotive"
          },
          {
            name: "Toys & Games"
          },
          {
            name: "Health & Wellness"
          },
          {
            name: "Computers & Accessories"
          },
          {
            name: "Office Supplies"
          },
          {
            name: "Baby Products"
          },
          {
            name: "Grocery"
          },
          {
            name: "Pet Supplies"
          },
          {
            name: "Gaming"
          }
    ];

    const newCategories = await CategoryModel.insertMany(categories);

    console.log("new Categories === ", newCategories);
    
}, 1000)