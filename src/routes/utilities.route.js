const express = require('express');
const { categories } = require('../controllers/utilities.controller');

const router = express.Router();

router.get('/categories', categories)


module.exports = router;


