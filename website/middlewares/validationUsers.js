const {check} = require('express-validator');
const path = require('path');

const validationUsers = [

    check('name').notEmpty().withMessage('Debes completar este campo'),
    
    check('lastname').notEmpty().withMessage('Debes completar este campo'),
    
    check('email')
    .notEmpty().withMessage('Debes completar este campo').bail()
    .isEmail().withMessage('Debes ingresar un email valido'),
    
    check('cell').notEmpty().withMessage('Debes completar este campo'),

    check('password').custom(() => {
        if (req.body.password === req.body.password-confirm) {
          return true;
        } else {
          return false;
        }
    })
    .withMessage('las contraseñas no coinciden'),
    
    check('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', 'jpeg'];

        if(file){
            let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
        }
        return true;
	})

] 

module.exports = validationUsers