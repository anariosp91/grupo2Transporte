const {check} = require('express-validator');
const path = require('path');

const validationUsers = [

    check('name').notEmpty().withMessage('Debes colocar tu nombre'),
    
    check('last_name').notEmpty().withMessage('Debes colocar tu apellido'),
    
    check('email')
    .notEmpty().withMessage('Debes colocar tu email').bail()
    .isEmail().withMessage('Debes ingresar un email valido'),
    
    check('phone').notEmpty().withMessage('Debes completar con tu teléfono'),

    check("password")
    .notEmpty().withMessage("Contraseña no deberia estar vacio"),

    check("password_confirm")
    .notEmpty().withMessage("Confirmar contraseña no deberia estar vacio")
    .custom((value,{req}) =>{
        if(value !== req.body.password){
            throw new Error('Las contraseñas no coinciden')
        }
        return true;
    }),
    
    check('image').custom((value, { req }) => {
		let file = req.files;
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