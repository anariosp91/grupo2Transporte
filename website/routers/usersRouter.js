const express = require('express');
const router = express.Router();

//Controller
const usersController = require('../controllers/usersControllerSequelize');

//Middlewares
const upload = require('../middlewares/multerUsers');
const validationUsers = require('../middlewares/validationUsers');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');

//Register form
router.get('/register',guestMiddleware, usersController.register);
router.post('/register',upload.single('image'), validationUsers, usersController.processRegister)

// //Login form
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.loginProcess);

// //Product cart
router.get('/productCart',authMiddleware, usersController.cart);

// //Favorites
router.get('/favorites',authMiddleware, usersController.favorites);

// //Users
router.get("/list", authMiddleware, adminAuthMiddleware, usersController.users)

// User profile 
router.get("/profile", authMiddleware, usersController.profile);

// User edit
router.get("/edit", authMiddleware, adminAuthMiddleware, usersController.edit);
router.put('/edit', upload.single('image'), usersController.save)
//router.post("/edit/:id", authMiddleware, usersController.profile);

// // Logout
router.get('/logout', usersController.logout);



module.exports = router;