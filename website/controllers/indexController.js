const path = require('path');
const tours = require('./tours')


let indexController = {
    index: (req, res) => {
        res.render('index', {tours: tours});
    },
    detalleId: (req,res) => {
        let tourId = tours.find(tour => tour.id == req.params.id)
        res.render('productDetail', {tour: tourId});
    },  
}

module.exports = indexController;