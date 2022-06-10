const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const validationUsers = require('../middlewares/validationUsers');
const usersController = require('../controllers/usersController');


router.get('/register', usersController.register);
router.post('/register', upload.single('image'), validationUsers, usersController.processRegister)

router.get('/login', usersController.login);

router.get('/productCart', usersController.cart);



module.exports = router;