const {check} = require('express-validator');
const toursController = require('../controllers/toursController');
const path = require('path');

const validationTours = [

    check('nombre').notEmpty().withMessage('Debes completar este campo'),
    check('descripcionCorta').isLength({ min: 80, max: 100 }).withMessage('La descripción debe contener entre 80 y 100 caracteres'),
    check('descripcionDetallada').isLength({ min: 150, max: 200 }).withMessage('La descripción debe contener entre 150 y 200 caracteres'),
    check('duracion')
    .isNumeric().withMessage('Debes completar este campo'),
    check('precio').isNumeric().withMessage('Debes completar este campo')
    
] 
   


module.exports = validationTours