const db = require('../../database/models');


const apiToursController = {

    tours: (req, res) => {
        let page = req.query.page ? Number(req.query.page) : 1
        let limit =req.query.limit ? Number(req.query.limit) : 10
        let offset = ( limit * page ) - limit
      
        db.Tour.findAndCountAll({
            offset: offset,
            limit: limit
        }).then(tours => {
           
            let toursResponse = tours.rows.map(tour => {
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
                            url: "/apiTours",
                            pagination: {
                                totalPagina:  toursResponse.length,
                                totalRegistro: tours.count,
                                next: `/apiTours?limit=${limit}&page=${page+1}`,
                                previus: `/apiTours?limit=${limit}&page=${page-1}`
                            }

                        },
                        data: {
                            tours: toursResponse
                        }
                    }
                    res.json(response);
        })
    },
    detailTour: (req, res) => {
        db.Tour.findByPk(req.params.id, {include: ['sold']})
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
                    urlImage: "http://localhost:8000/img/products/" + tour.image1,
                    vendido : tour.sold
                }
            }
            res.json(response);
        })
    }
}
    

module.exports = apiToursController