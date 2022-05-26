const path = require('path');
const fs = require('fs');

const toursFile = path.join(__dirname, '../data/tours.json');
const tours = JSON.parse(fs.readFileSync(toursFile, 'utf-8'));


let toursController = {
    create: (req, res) => {
        res.render('create');
    },
    save: (req, res) => {

        let imagen1
        if(req.files[0]!= undefined){
			imagen1 = req.files[0].filename
		}else{
			imagen1 = '../public/img/logo.svg'
		}

        let imagen2
        if(req.files[1]!= undefined){
			imagen2 = req.files[1].filename
		}else{
			imagen2 = '../img/logo.svg'
		}

        let imagen3
        if(req.files[2]!= undefined){
			imagen3 = req.files[2].filename
		}else{
			imagen3 = '../public/img/logo.svg'
		}

        let newTour = {
            id: tours[tours.length -1].id + 1,
            ...req.body,
            imagen1: imagen1,
            imagen2: imagen2,
            imagen3: imagen3
        }

        tours.push(newTour)
        fs.writeFileSync(toursFile, JSON.stringify(tours));
        res.redirect('/tours/list');
    },
    edit: (req, res) => {
        let tourId = tours.find(tour => tour.id == req.params.id)
        res.render('edit',{tour: tourId});
    },
    // update: (req,res)=>{



    // }
    detail: (req,res) => {
        let tourId = tours.find(tour => tour.id == req.params.id)
        res.render('productDetail', {tour: tourId});
    },  
    tours: (req, res) => {
        res.render('tours', {tours: tours});
    }
}

module.exports = toursController;