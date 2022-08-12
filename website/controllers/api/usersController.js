const db = require("../../database/models");

const usersController = {
    list: (req, res) => {
        db.User.findAll()
        .then(users => {
            let response = {
                meta: {
                    status: 200,
                    total:  users.length,
                    url: "apiUsers"
                },
                data: users
            }
            res.json(response);
        })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let response = {
                    meta: {
                        status: 200,
                        total:  user.length,
                        url: "apiUsers/" + req.params.id
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