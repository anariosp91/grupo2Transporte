const {validationResult} = require('express-validator');
const db = require ('../database/models/index');
const {Op} = require('sequelize')

let toursController = {

    create: (req, res) =>{
    res.render('create')
    },
    processCreate: (req, res) => {
        const resultValidation = validationResult(req);
       
     if (resultValidation.errors.length >0) {
         return res.render('create', {
               errors: resultValidation.mapped(),
               oldData: req.body
        })
        }

        db.Tour.create({
            ...req.body,
        })
        .then(tour => res.redirect('/tours/list'))
    }



}
module.exports = toursController