var express = require('express');
var router = express.Router();
const path = require('path');
const productDetailController = require('../controllers/productDetailController')

router.get('/productDetail', productDetailController.detalleTour);

module.exports = router;