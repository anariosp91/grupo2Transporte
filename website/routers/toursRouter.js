const express = require('express');
const router = express.Router();
const multer = require('multer');

const toursController = require('../controllers/toursController')

router.get('/detail/:id/', toursController.detail);

router.get('/create', toursController.create);

router.get('/edit', toursController.edit);

router.get('/list', toursController.tours);



module.exports = router;