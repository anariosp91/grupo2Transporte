const express = require('express');
const router = express.Router();

const editController = require('../controllers/editController')

router.get('/edit', editController.edit);



module.exports = router;