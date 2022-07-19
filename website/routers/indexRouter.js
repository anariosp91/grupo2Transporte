const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')

// Home
router.get('/', indexController.index);

// Tours search 
router.post('/search', indexController.search);

// Error 404
router.get("/error", indexController.error);

module.exports = router;