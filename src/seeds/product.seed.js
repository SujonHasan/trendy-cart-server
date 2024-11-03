const ProductModel = require("../models/product.model");


setTimeout( async() => {

    const productContent = {

        title:  "Men's Casual Shirt",
        productId: "abc126",
        description: {
            short: "100% cotton shirt available in various colors."
        },
        price: {
            cost: 1200,
            regular: 1600
        },
        size: "M, L, XL",
        quantity: 100,
        categories: [{_id: "671bde6567dfb084acb04c2d", name: "Fashion"}],
        review: {
            comment: "Comfortable and stylish for everyday wear."
        },
        gallery: [{file: "https://i.ibb.co.com/GkQn9X4/Men-s-Casual-Shirt.jpg"}]
    }
    const product = new ProductModel(productContent);

    await product.save();

    console.log("product == ", product);
    
    
}, 1000);