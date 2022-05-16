const path = require('path');


let usersController = {
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register')
    },
    cart: (req, res) => {
    res.render('productCart');
    }
}

module.exports = usersController;