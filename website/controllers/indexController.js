const path = require('path');
const fs = require('fs');

const toursFile = path.join(__dirname, '../data/tours.json');
const tours = JSON.parse(fs.readFileSync(toursFile, 'utf-8'));


let indexController = {
    index: (req, res) => {
        res.render('index', {tours: tours});
    } ,
    search: (req, res) => {
        res.render('search');
    } 
}

module.exports = indexController;