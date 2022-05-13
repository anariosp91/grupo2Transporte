var express = require('express');
var router = express.Router();
const path = require('path');
const editController = require('../controllers/editController')

router.get('/edit', editController.edit);



module.exports = router;