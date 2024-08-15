const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const { registerValidation, loginValidation } = require('../validations/auth.validation');

const router = express.Router();


router.post("/register", registerValidation, register)
router.post("/login", loginValidation, login) 

module.exports = router;