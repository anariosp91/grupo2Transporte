var express = require('express');
var router = express.Router();
const path = require('path');
const indexController = require('../controllers/indexController')

router.get('/', indexController.index);



module.exports = router;