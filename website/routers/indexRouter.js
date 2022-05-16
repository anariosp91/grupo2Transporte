const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')

router.get('/', indexController.index);

router.get('/productDetail/:id', indexController.detalleId);



module.exports = router;