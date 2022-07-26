const {check} = require('express-validator');
const path = require('path');

const validationUsers = [

    check('name').notEmpty().withMessage('Debes colocar tu nombre')
    .isLength({ min: 2 }).withMessage("El nombre debe ser mayor a 2 caracteres"),
    
    check('last_name').notEmpty().withMessage('Debes colocar tu apellido')
    .isLength({ min: 2 }).withMessage("El apellido debe ser mayor a 2 caracteres"),
    
    check('email')
    .notEmpty().withMessage('Debes colocar tu email').bail()
    .isEmail().withMessage('Debes ingresar un email valido'),
    
    check('phone').notEmpty().withMessage('Debes completar con tu teléfono'),

    check("password")
    .notEmpty().withMessage("Contraseña no deberia estar vacio")
    .isLength({ min: 8 }).withMessage("La contraseña debe tener mínimo 8 caracteres"),

    check("password_confirm")
    .notEmpty().withMessage("Confirmar contraseña no deberia estar vacio")
    .isLength({ min: 8 }).withMessage("La contraseña debe tener mínimo 8 caracteres")
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