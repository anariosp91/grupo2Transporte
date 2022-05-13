const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController')

router.get('/register', registerController.register);



module.exports = router;