const path = require('path');
const tours = require('./tours')


let indexController = {
    index: (req, res) => {
        res.render('index', {tours: tours});
    } 
}

module.exports = indexController;