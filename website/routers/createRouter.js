var express = require('express');
var router = express.Router();
const path = require('path');
const createController = require('../controllers/createController')

router.get('/create', createController.create);



module.exports = router;