const path = require('path');
const fs = require('fs');

const toursFile = path.join(__dirname, '../data/tours.json');
const tours = JSON.parse(fs.readFileSync(toursFile, 'utf-8'));

let index = {

    index : (req, res) => {
        res.render('index', {tours: tours});
    },
    // search: (req, res) => {

    // },
    error: (req, res) => {
        res.render("error")
    }

}

module.exports = index