const db = require("../../database/models");

const usersController = {
    users: (req, res) => {

        let page = req.query.page ? Number(req.query.page) : 1
        let limit =req.query.limit ? Number(req.query.limit) : 10
        let offset = ( limit * page ) - limit
      
        db.User.findAndCountAll({
            offset: offset,
            limit: limit
        }).then(users => {
           
            let usersResponse = users.rows.map(user => {
                        return {
                            id : user.id,
                            name : user.name,
                            lastName : user.last_name,
                            email: user.email,
                            detail : "http://localhost:8000/apiUsers/" + user.id,
                            image : user.image
                        }
                    })
                   
                    let response = {
                        meta: {
                            status: 200,
                            url: "http://localhost:8000/apiUsers",
                            pagination: {
                                totalPagina:  usersResponse.length,
                                totalRegistro: users.count,
                                next: `http://localhost:8000/apiUsers?limit=${limit}&page=${page+1}`,
                                previus: `http://localhost:8000/apiUsers?limit=${limit}&page=${page-1}`
                            }

                        },
                        data: {
                            users: usersResponse
                        }
                    }
                    res.json(response);
        })
        // db.User.findAll()
        // .then(users => {
        //     let response = {
        //         meta: {
        //             status: 200,
        //             count:  users.length,
        //             url: "/apiUsers"
        //         },
        //         data: users
        //     }
        //     res.json(response);
        // })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let response = {
                    meta: {
                        status: 200,
                        total:  user.length,
                        url: "http://localhost:8000/apiUsers/" + req.params.id
                    },
                    data: {
                        id: user.id,
                        name: user.name,
                        lastName: user.last_name,
                        email: user.email,
                        urlImage: "http://localhost:8000/img/users/" + user.image
                    }
                }
                res.json(response);
            })
    }
}

module.exports = usersController;