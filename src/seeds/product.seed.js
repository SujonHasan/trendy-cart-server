const ProductModel = require("../models/product.model");


setTimeout( async() => {

    const productContent = {

        title:  "Action Figure Toy",
        productId: "abc123",
        description: {
            short: "A durable action figure that encourages imaginative play."
        },
        price: {
            discountPrice: 750,
            mainPrice: 1000
        },
        size: ["6 inches"],
        stock: 50,
        categories: [{_id: "671bde6567dfb084acb04c33", name: "Toys & Games"}],
        review: {
            comment: "Great toy for kids aged 5-10."
        },
        gallery: [{file: "https://i.ibb.co.com/wdC04yw/Ultra-HD-Action-Camera.jpg"}]
    }

    const product = new ProductModel(productContent);

    await product.save();

    console.log("product == ", product);
    
    
}, 1000);