const express = require('express');
const { products, product } = require('../controllers/product.controller');

const router = express.Router();

router.get("/products", products)
router.get("/product/:_id", product)


module.exports = router;