const ModelUsers = require('../models/User');

function userAuth (req, res, next){
    res.locals.isLogged = false;
	if(req.cookies.userEmail){
		let emailInCookie = req.cookies.userEmail;

        let userFromCookie = ModelUsers.findField('email', emailInCookie);
        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }
    
        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
        next()
    }else if(req.session.userLogged){
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;

		next()
	}else{
		next()
	}
}

module.exports = userAuth