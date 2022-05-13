const path = require('path');


let registerController = {
    register: (req, res) => {
        res.render('register')
    }
}

module.exports = registerController