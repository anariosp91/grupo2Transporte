const path = require('path');
const fs = require('fs');

const usersFile = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));


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