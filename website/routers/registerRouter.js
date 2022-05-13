var express = require('express');
var router = express.Router();
const path = require('path');
const registerController = require('../controllers/registerController')

router.get('/register', registerController.register);



module.exports = router;