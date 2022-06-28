
function adminAuthMiddleware (req, res, next){
   if(!(req.session.userLogged && req.session.userLogged.admin)){
        return res.redirect(('/'))
   } 
   next()
}

module.exports = adminAuthMiddleware