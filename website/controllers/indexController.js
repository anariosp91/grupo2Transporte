const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');
const db = require ('../database/models/index');
const {Op} = require('sequelize')



let indexController = {
    index: (req, res) => {
        db.Tour.findAll()
        .then(tours => res.render('index',{tours}))
    } ,
    search: (req, res) => {
        console.log(req.body)
        db.Tour.findOne({
            where: {
                title : {[Op.like]: '%'+ req.body.search + '%'},
            }
        })
        .then(tour => {
            if(tour == null){
                db.Tour.findAll()
                    .then(tours => {
                        res.locals.errorSearch = 'No se encontraron resultados para tu busqueda'
                        res.render('index', {tours})
                    })
            }else{
                res.redirect('/tours/detail/' + tour.id)
            }
        }) 
    }
}
module.exports = indexController;