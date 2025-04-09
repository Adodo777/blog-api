const authController = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const authValidation = require('../validations/auth.validation');

router.get('/', (req, res) => res.send('Auth route'));
router.post('/login', validate(authValidation.loginValidation), authController.login);
router.post('/register', validate(authValidation.registerValidation), authController.register);


module.exports = router;

