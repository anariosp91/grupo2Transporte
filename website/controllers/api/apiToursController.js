const db = require('../../database/models');


const apiToursController = {

    tours: (req, res) => {
        
        db.Tour.findAll()
        .then(tours => {
            let toursResponse = tours.map(tour => {
                return {
                    id : tour.id,
                    title : tour.title,
                    description : tour.short_description,
                    detail : '/apiTours/' + tour.id,
                    image : tour.image1
                }
            })
           
            let response = {
                meta: {
                    status: 200,
                    total:  tours.length,
                    url: "/apiTours"
                },
                data: {
                    tours: toursResponse
                }
            }
            res.json(response);
        })
    },
    detailTour: (req, res) => {
        db.Tour.findByPk(req.params.id)
        .then(tour => {
            let response = {
                meta: {
                    status: 200,
                    total:  tour.length,
                    url: "apiUsers/" + req.params.id
                },
                data: {
                    id : tour.id,
                    title : tour.title,
                    description : tour.short_description,
                    urlImage: "http://localhost:8000/img/products/" + tour.image1
                   
                }
            }
            res.json(response);
        })
    }
}
    

module.exports = apiToursController