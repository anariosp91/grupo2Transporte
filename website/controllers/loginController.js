const path = require('path');


let loginController = {
    login: (req,res) => {
    res.render('login')
    }   
}

module.exports = loginController