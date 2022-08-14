const express = require('express');
const router = express.Router();
const apiToursController = require('../../controllers/api/apiToursController');


router.get("/", apiToursController.tours)
router.get('/:id', apiToursController.detailTour);

module.exports = router