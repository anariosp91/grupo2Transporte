const express = require('express');
const router = express.Router();
// const multer = require('multer');
const path = require('path');
const {check, validationResult} = require('express-validator');
const toursController = require('../controllers/toursControllerSequelize');
const upload = require('../middlewares/multer');
const validationTours = require('../middlewares/validationTours');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');


//router.get('/detail/:id/', toursController.detail);

//creacion del producto
router.get('/create', adminAuthMiddleware, toursController.create);
router.post('/create', upload.any(), validationTours, adminAuthMiddleware, toursController.processCreate)

// router.get('/edit/:id/', adminAuthMiddleware, toursController.edit);
// router.put('/edit/:id/', upload.any(), adminAuthMiddleware, toursController.update)

// router.get('/list', toursController.tours);

// router.delete('/delete/:id', adminAuthMiddleware, toursController.delete);



module.exports = router;