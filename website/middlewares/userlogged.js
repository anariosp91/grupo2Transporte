
const db = require ('../database/models/index');

function userLogged(req, res, next) {
	res.locals.isLogged = false;
	if(req.cookies.userEmail){
		let emailInCookie = req.cookies.userEmail;
	
		db.User.findOne({
			where: {email: emailInCookie}
		})
		.then(userFromCookie => {
			if (userFromCookie) {
				req.session.userLogged = userFromCookie;
			}
		
			if (req.session.userLogged) {
				res.locals.isLogged = true;
				res.locals.userLogged = req.session.userLogged;
			}
			next()
		})
	}else if(req.session.userLogged){
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;

		next()
	}else{
		next()
	}
	
}

module.exports = userLogged;