const express = require('express');
const router = express.Router();

const productCartController = require('../controllers/productCartController');

router.get('/productCart', productCartController.carrito);



module.exports = router;