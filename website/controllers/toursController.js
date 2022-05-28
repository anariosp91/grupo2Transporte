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
			imagen1 = 'logo.svg'
		}

        let imagen2
        if(req.files[1]!= undefined){
			imagen2 = req.files[1].filename
		}else{
			imagen2 = 'logo.svg'
		}

        let imagen3
        if(req.files[2]!= undefined){
			imagen3 = req.files[2].filename
		}else{
			imagen3 = 'logo.svg'
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
    update: (req,res)=>{
        let tourId = req.params.id
		let tourToEdit = tours.find( tour => tour.id == tourId)

		let imagen1
        if(req.files[0]!= undefined){
			imagen1 = req.files[0].filename
		}else{
			imagen1 = tourToEdit.imagen1
		}

        let imagen2
        if(req.files[1]!= undefined){
			imagen2 = req.files[1].filename
		}else{
			imagen2 = tourToEdit.imagen2
		}

        let imagen3
        if(req.files[2]!= undefined){
			imagen3 = req.files[2].filename
		}else{
			imagen3 = tourToEdit.imagen3
		}

		tourToEdit = {
			id: tourToEdit.id,
			...req.body,
			imagen1: imagen1,
            imagen2: imagen2,
            imagen3: imagen3
		}
		
		let newTour = tours.map(tour =>{
			if(tour.id == tourToEdit.id){
				return tour = {...tourToEdit}			
			}
			return tour
		})

		fs.writeFileSync(toursFile, JSON.stringify(newTour));
		res.redirect('/tours/detail/' + tourToEdit.id )
    },
    detail: (req,res) => {
        let tourId = tours.find(tour => tour.id == req.params.id)
        res.render('productDetailV2', {tour: tourId});
    },  
    tours: (req, res) => {
        res.render('tours', {tours: tours});
    },
    delete: (req, res) => {
        let id = req.params.id;
		let toursUpdate = tours.filter(tour => tour.id != id );

		fs.writeFileSync(toursFile, JSON.stringify(toursUpdate));

		res.redirect("/tours/list")

    }
}

module.exports = toursController;