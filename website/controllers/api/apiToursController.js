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
                            detail : '/api/tours/' + tour.id,
                            image : tour.image1
                        }
                    })
                   
                    let response = {
                        meta: {
                            status: 200,
                            url: "/apiTours",
                            pagination: {
                                totalPage:  toursResponse.length,
                                totalRegister: tours.count,
                                next: `/api/tours?limit=${limit}&page=${page+1}`,
                                previus: `/api/tours?limit=${limit}&page=${page-1}`
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
                    url: "api/tours/" + req.params.id
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
    },
    moreSaleTour: async (req, res) => {
        
        const [results, metadata] = await db.sequelize.query("SELECT tour_id, count(tour_id) AS contador FROM sales_tour GROUP BY tour_id ORDER BY contador DESC LIMIT 1");
        let tour_id = results[0].tour_id
        db.Tour.findOne({
            where: { id : tour_id}
        })
        .then(tour => {
            let response = {
                meta: {
                    status: 200,
                    tour_id:  tour.id
                },
                data: {
                    id : tour.id,
                    title : tour.title,
                    description : tour.short_description,
                    image : tour.image1
                }
            }
            res.json(response);
        })       
    }
}
    

module.exports = apiToursController