// const path = require('path');
// const fs = require('fs');
const {validationResult} = require('express-validator');
const db = require ('../database/models/index');
const {Op} = require('sequelize')



let indexController = {
    index: (req, res) => {
        db.Tour.findAll()
        .then(tours => res.render('index',{tours}))
    },
    search: (req, res) => {
        console.log(req.body)
        db.Tour.findAll({
            where: {
                title : {[Op.like]: '%'+ req.body.search + '%'},
            }
        })
        .then(tours => {
            if(tours == ""){
                db.Tour.findAll()
                    .then(tour => {
                        res.locals.errorSearch = 'No se encontraron resultados para tu busqueda'
                        res.render('search', {tours :  tour})
                    })
            }else{
                res.render("search", {tours})
            }
        })
    },
    error: (req, res) => {
        res.render("error")
    }
}

module.exports = indexController;