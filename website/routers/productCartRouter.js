var express = require('express');
var router = express.Router();
const path = require('path');
const productCartController = require('../controllers/productCartController')

router.get('/productCart', productCartController.carrito);



module.exports = router;