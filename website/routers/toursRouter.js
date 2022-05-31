const express = require('express');
const router = express.Router();
// const multer = require('multer');
const path = require('path');
const {check, body, validationResult} = require('express-validator');
const toursController = require('../controllers/toursController');
const upload = require('../middlewares/multer');
const validationTours = require('../middlewares/validationTours');


router.get('/detail/:id/', toursController.detail);

//creacion del producto
router.get('/create', toursController.create);
router.post('/create', upload.any(), validationTours, toursController.save)

router.get('/edit/:id/', toursController.edit);
router.put('/edit/:id/', upload.any(), toursController.update)

router.get('/list', toursController.tours);

router.delete('/delete/:id', toursController.delete);



module.exports = router;