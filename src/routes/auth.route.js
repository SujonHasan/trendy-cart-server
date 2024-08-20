const express = require('express');
const { register, login, logout } = require('../controllers/auth.controller');
const { registerValidation, loginValidation } = require('../validations/auth.validation');
const { isAuthenticated } = require('../middlewares/auth.middleware');

const router = express.Router();


router.post("/register", registerValidation, register)
router.post("/login", loginValidation, login)
router.delete("/logout", isAuthenticated, logout)

module.exports = router;