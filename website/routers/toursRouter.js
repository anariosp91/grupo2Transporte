const express = require('express');
const router = express.Router();
// const multer = require('multer');
const path = require('path');
const {check, validationResult} = require('express-validator');
const toursController = require('../controllers/toursController');
const upload = require('../middlewares/multer');
const validationTours = require('../middlewares/validationTours');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/detail/:id/', toursController.detail);

//creacion del producto
router.get('/create', authMiddleware, toursController.create);
router.post('/create', upload.any(), validationTours, toursController.processCreate)

router.get('/edit/:id/', authMiddleware, toursController.edit);
router.put('/edit/:id/', upload.any(), toursController.update)

router.get('/list', toursController.tours);

router.delete('/delete/:id', toursController.delete);



module.exports = router;