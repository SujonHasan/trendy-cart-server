const express = require('express');
const { baseUrl } = require('../controllers/guest.controller');

const router = express.Router();

router.get("/", baseUrl);

module.exports = router;