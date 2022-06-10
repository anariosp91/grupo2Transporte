// const path = require('path');
// const fs = require('fs');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const ModelUsers = require('../models/User')

// const usersFile = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));


let usersController = {
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res)=>{
        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = ModelUsers.findField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

        let image
        if(req.files != undefined){
			image = req.files.filename
		}else{
			image = 'avatar.png'
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			image: image
		}

		ModelUsers.create(userToCreate);

		return res.redirect('/user/login');
    },
    cart: (req, res) => {
    res.render('productCart');
    }
}

module.exports = usersController;