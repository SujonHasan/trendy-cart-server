const express = require('express');
const { register, login, logout } = require('../controllers/auth.controller');
const { registerValidation, loginValidation } = require('../validations/auth.validation');

const router = express.Router();


router.post("/register", registerValidation, register)
router.post("/login", loginValidation, login)
router.delete("/logout", logout)

module.exports = router;