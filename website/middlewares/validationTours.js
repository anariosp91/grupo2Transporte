const {check} = require('express-validator');
const path = require('path');

const validationTours = [

    check('title').notEmpty().withMessage('Debes completar este campo'),
    check('short_description').isLength({ min: 80, max: 100 }).withMessage('La descripción debe contener entre 80 y 100 caracteres'),
    check('long_description').isLength({ min: 150, max: 200 }).withMessage('La descripción debe contener entre 150 y 200 caracteres'),
    check('duration')
    .isNumeric().withMessage('Debes completar este campo'),
    check('price').isNumeric().withMessage('Debes completar este campo'),
    check('image1').custom((value, { req }) => {
		let file = req.files;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}),
    check('image2').custom((value, { req }) => {
		let file = req.files;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}),
    check('image3').custom((value, { req }) => {
		let file = req.files;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
] 
   


module.exports = validationTours;