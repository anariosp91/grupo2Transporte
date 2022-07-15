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
       console.log(resultValidation)
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
                if(req.files != undefined){
                    image = req.files.filename
            
                }else{
                    image = 'avatar.png'
                }
            
            
                db.User.create({
                    ...req.body,
                    password : bcryptjs.hashSync(req.body.password, 10),
                    image : image
                })
                .then(user => res.redirect('/'))
                .catch(err => console.log(err))
    
        }
    })
    },
    login: (req, res) => {
        let userToLogin = db.User.findOne({
            where: {email : req.body.email}
        })
    }
    // detail: (req, res) => {
    //     let tourId = req.params.id
    //     db.Tour.findByPk(tourId, {
    //         include: ['sold']
    //     })
    //     .then(tour => res.render('productDetailV2', {tour}))
    //     // .then(tour => console.log(tour.sold))
    //     .catch(err => console.log(err))
    // },
    // edit: (req, res) => {
    //     let tourId = req.params.id
    //     db.Tour.findByPk(tourId)
    //     .then(tour => res.render('edit', {tour}))
    //     .catch(err => console.log(err))
    // },
    // update: (req, res) => {
    //     let tourId = req.params.id
        
    //     let images = req.files
    //     let tourEdit = {
    //         ...req.body,
    //     }
    //     images.forEach(image => {
    //         if(image.fieldname == 'image1'){
    //             tourEdit.image1 = image.filename
    //         }
    //         if(image.fieldname == 'image2'){
    //             tourEdit.image2 = image.filename
    //         }
    //         if(image.fieldname == 'image3'){
    //             tourEdit.image3 = image.filename
    //         }
    //     });
    //     db.Tour.update(tourEdit,
    //     {
    //         where: {id : tourId}
    //     })
    //     .then(tour => res.redirect('/tours/detail/'+ tourId))
    // },
    // tours: (req, res) => {
    //     db.Tour.findAll()
    //     .then(tours => res.render('tours',{tours}))
    // },
    // delete: (req, res) => {
    //     let tourId = req.params.id
    //     db.Tour.destroy(
    //     {
    //         where: {id: tourId}
    //     }
    //     )
    //     .then(tour => res.redirect('/tours/list'))
    //     .catch(err => console.log(err))
    // }
    


}
module.exports = usersController