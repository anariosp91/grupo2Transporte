const express = require('express');
const router = express.Router();
const apiToursController = require('../../controllers/api/apiToursController');


router.get("/", apiToursController.tours)
router.get('/sale', apiToursController.moreSaleTour)
router.get('/:id', apiToursController.detailTour);

module.exports = router