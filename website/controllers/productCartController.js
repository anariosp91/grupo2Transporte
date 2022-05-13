const path = require('path');


let productCartController = {
    carrito: (req,res) => {
    res.render('productCart')
    }  
}

module.exports = productCartController