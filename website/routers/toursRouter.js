const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const {check, validationResult} = require('express-validator');

// Controller
const toursController = require('../controllers/toursControllerSequelize');

// Middlewares
const upload = require('../middlewares/multer');
const validationTours = require('../middlewares/validationTours');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');

// Tour detail
router.get('/detail/:id/', toursController.detail);

// Tours create
router.get('/create', adminAuthMiddleware, toursController.create);
router.post('/create', upload.any() , validationTours, adminAuthMiddleware, toursController.processCreate)

// Tours edit
router.get('/edit/:id/', adminAuthMiddleware, toursController.edit);
router.put('/edit/:id/', upload.any(), adminAuthMiddleware, toursController.update)

// Tours list
router.get('/list', toursController.tours);

// Tours delete
router.delete('/delete/:id', adminAuthMiddleware, toursController.delete);


module.exports = router;