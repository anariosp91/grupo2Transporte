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
        db.Tour.findAll()
        .then(tours => res.render('search',{tours}))
    } 
}

module.exports = indexController;