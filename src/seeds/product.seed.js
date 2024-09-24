const ProductModel = require("../models/product.model");


setTimeout( async() => {

    const productContent = {

        title:  "test-Product-34",
        productId: "abc1256",
        description: {
            long: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        },
        price: {
            cost: 500,
            regular: 600
        },
        categories: [{_id: "66cdec7a2abd59be5a7e130d", name: "Clothing"}],
        subCategories: [{_id: "66cdf12b0f8d1edfc5296f9b", name: "Kids' Clothing"}],

    }

    const product = new ProductModel(productContent);

    await product.save();

    console.log("product == ", product);
    
    
}, 1000);