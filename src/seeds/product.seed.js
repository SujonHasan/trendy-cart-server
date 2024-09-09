const ProductModel = require("../models/product.model");


setTimeout( async() => {

    const productContent = {

        title:  "test-Product-2",
        productId: "abc125",
        description: {
            long: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        },
        price: {
            cost: 500,
            regular: 600
        }
    }

    const product = new ProductModel(productContent);

    await product.save();

    console.log("product == ", product);
    
    
}, 1000);