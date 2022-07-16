const path = require('path');
const {body} = require('express-validator');

const validationTours = [

   body('title').notEmpty().withMessage('Debes completar este campo'),
   body('short_description').isLength({ min: 80, max: 100 }).withMessage('La descripción debe contener entre 80 y 100 caracteres'),
   body('long_description').isLength({ min: 150, max: 200 }).withMessage('La descripción debe contener entre 150 y 200 caracteres'),
   body('duration')
    .isNumeric().withMessage('Debes completar este campo'),
   body('price').isNumeric().withMessage('Debes completar este campo'),
   body('image1').custom((value, { req }) => {
		let file = req.files[0];
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
   body('image2').custom((value, { req }) => {
		let file = req.files[1];
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
   body('image3').custom((value, { req }) => {
		let file = req.files[2];
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