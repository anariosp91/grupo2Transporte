const path = require('path');


let createController = {
    create: (req, res) => {
        res.render('create');
    }   
}

module.exports = createController;