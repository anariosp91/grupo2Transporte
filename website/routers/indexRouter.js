const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')

// Home
router.get('/', indexController.index);

// Tours search 
router.post('/search', indexController.search);

module.exports = router;