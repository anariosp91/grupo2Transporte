const {validationResult} = require('express-validator');
const db = require ('../database/models/index');
const {Op} = require('sequelize');
const bcryptjs = require('bcryptjs')

let usersController = {

    register: (req, res) =>{
    res.render('register')
    },
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
     if (resultValidation.errors.length >0) {
         return res.render('register', {
               errors: resultValidation.mapped(),
               oldData: req.body
        })}
    
    let userToRegister = db.User.findOne({
        where: {email : req.body.email}
    }).then(user => {
        if(user != null){
    
            res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            }
            )
        }else if(user == null){
            
                let image
                
                if(req.file != undefined){
                    image = req.file.filename
            
                }else{
                    image = 'avatar.png'
                }
            
            
                db.User.create({
                    ...req.body,
                    password : bcryptjs.hashSync(req.body.password, 10),
                    image : image
                })
                .then(user => res.redirect('/users/login'))
                .catch(err => console.log(err))
    
        }
    }).catch(err => console.log(err))
    },
    login: (req, res) => {
        res.render('login')
    },
    loginProcess: (req, res) => {
        let userToLogin = db.User.findOne({
            where: {email: req.body.email}
        })
        .then( user => {
            
            if(user) {
                
                let correctPassword = bcryptjs.compareSync(req.body.password, user.password);
                if (correctPassword) {
                    delete user.password;
                    req.session.userLogged = user;
                    if(req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 1000) * 90 })
    
                    }
    
                    return res.redirect('/');
                } 
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Los datos ingresados son incorrectos'
                    }
                }
            });
        }).catch(err => console.log(err))	
    },
    cart: (req, res) => {
        res.render('productCart')
    },
    users: (req, res) => {
        db.User.findAll()
        .then(users => res.render('users', {users}))
	},
	favorites: (req, res) => {
		res.render('favorites');
	}
    
}
module.exports = usersController