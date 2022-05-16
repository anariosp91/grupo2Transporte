const path = require('path');
const tours = require('./tours')


let toursController = {
    create: (req, res) => {
        res.render('create');
    },
    edit: (req, res) => {
        res.render('edit');
    },
    detail: (req,res) => {
        let tourId = tours.find(tour => tour.id == req.params.id)
        res.render('productDetail', {tour: tourId});
    },  
    tours: (req, res) => {
        res.render('tours');
    }
}

module.exports = toursController;