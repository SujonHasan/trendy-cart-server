const express = require('express');
const { getUser } = require('../controllers/user.controller');
const { isAuthenticated } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/:_id', getUser)

module.exports = router;