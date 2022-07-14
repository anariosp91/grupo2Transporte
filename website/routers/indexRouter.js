const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')

router.get('/', indexController.index);

router.get('/search', indexController.search);

module.exports = router;