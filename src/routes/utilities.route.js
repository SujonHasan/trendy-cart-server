const express = require('express');
const { categories, subCategories, categoryTree } = require('../controllers/utilities.controller');

const router = express.Router();

router.get('/categories', categories);
router.get('/sub-categories/:categoryId', subCategories);
router.get('/category-tree', categoryTree);


module.exports = router;


