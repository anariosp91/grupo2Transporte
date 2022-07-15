const db = require ('../database/models/index');
const {Op} = require('sequelize')


let indexController = {
    index: (req, res) => {
        db.Tour.findAll()
        .then(tours => res.render('index',{tours}))
    } ,
    search: (req, res) => {
        res.render('search');
    } 
}

module.exports = indexController;