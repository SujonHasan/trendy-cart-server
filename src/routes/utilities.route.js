const express = require('express');
const { categories, subCategories } = require('../controllers/utilities.controller');

const router = express.Router();

router.get('/categories', categories);
router.get('/sub-categories/:categoryId', subCategories)


module.exports = router;


