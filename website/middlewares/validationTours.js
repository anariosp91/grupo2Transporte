const {check} = require('express-validator');
const toursController = require('../controllers/toursController');
const path = require('path');

const validationTours = [

    check('title').notEmpty().withMessage('Debes completar este campo'),
    check('short_description').isLength({ min: 80, max: 100 }).withMessage('La descripción debe contener entre 80 y 100 caracteres'),
    check('long_description').isLength({ min: 150, max: 200 }).withMessage('La descripción debe contener entre 150 y 200 caracteres'),
    check('duration')
    .isNumeric().withMessage('Debes completar este campo'),
    check('price').isNumeric().withMessage('Debes completar este campo')
    
] 
   


module.exports = validationTours