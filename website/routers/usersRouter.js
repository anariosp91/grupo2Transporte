const express = require('express');
const router = express.Router();

//Controller
const usersController = require('../controllers/usersController');

//Middlewares
const upload = require('../middlewares/multerUsers');
const validationUsers = require('../middlewares/validationUsers');

//Register form
router.get('/register', usersController.register);
router.post('/register', upload.single('image'), validationUsers, usersController.processRegister)

//Login form
router.get('/login', usersController.login);

//Product cart
router.get('/productCart', usersController.cart);



module.exports = router;