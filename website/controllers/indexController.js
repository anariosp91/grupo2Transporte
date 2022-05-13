const path = require('path');


let indexController = {
    index: (req, res) => {
        res.render('index');
    }
}

module.exports = indexController;