const { CategoryModel } = require("../models/category.model");

setTimeout( async ()=>{

    const categories = [
        {
            name: "Electronics",
            photo: "https://ibb.co.com/gdKnQXq"
          },
          {
            name: "Fashion",
            photo: "https://ibb.co.com/QrBt7yc"
          },
          {
            name: "Home & Kitchen",
            photo: "https://ibb.co.com/cTns6R5"
          },
          {
            name: "Sports & Outdoors",
            photo: "https://ibb.co.com/k8rXgRd"
          },
          {
            name: "Books",
            photo: "https://ibb.co.com/mGXdMKQ"
          },
          {
            name: "Beauty & Personal Care",
            photo: "https://ibb.co.com/B4NJhDT"
          },
          {
            name: "Automotive",
            photo: "https://ibb.co.com/qN3wLTF"
          },
          {
            name: "Toys & Games",
            photo: "https://ibb.co.com/YWf9ThJ"
          },
          {
            name: "Health & Wellness",
            photo: "https://ibb.co.com/2Z2sVRJ"
          },
          {
            name: "Computers & Accessories",
            photo: "https://ibb.co.com/n07Zr07"
          },
          {
            name: "Office Supplies",
            photo: "https://ibb.co.com/Fk11h6c"
          },
          {
            name: "Baby Products",
            photo: "https://ibb.co.com/KKx6Q9X"
          },
          {
            name: "Grocery",
            photo: "https://ibb.co.com/QdBPRLL"
          },
          {
            name: "Pet Supplies",
            photo: "https://ibb.co.com/x2hDNXZ"
          },
          {
            name: "Gaming",
            photo: "https://ibb.co.com/PWLx0FX"
          }
    ];

    const newCategories = await CategoryModel.insertMany(categories);

    console.log("new Categories === ", newCategories);
    
}, 1000)