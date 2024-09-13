const express = require('express');
const { getUser } = require('../controllers/user.controller');
const { isAuthenticated } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', isAuthenticated, getUser)

module.exports = router;