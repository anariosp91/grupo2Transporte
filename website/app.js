const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 8000;

const userLogged = require("./middlewares/userlogged");

//Routers require
const indexRouter = require('./routers/indexRouter');
const usersRouter = require('./routers/usersRouter');
const toursRouter = require('./routers/toursRouter');

//Constrollers APIs
const apiUsersRoutes = require("./routers/api/apiUsersRouter");
const apiToursRouter = require("./routers/api/apiToursRouter");


app.listen(port, (req,resp) => console.log('iniciando servidor en el puerto ' + port));

const publicPath = path.resolve(__dirname,'./public')


//Middlewares
app.use(express.static('public'))

app.use(session({ secret: "Shhh, It's a secret",
resave: false,
saveUninitialized: false,
}));
app.use(cookies());
app.use(userLogged);

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));


//Routers
app.use('/', indexRouter)

app.use('/tours', toursRouter);

app.use('/users', usersRouter);

//Routers APIs

app.use('/api/Users', apiUsersRoutes);
app.use('/api/Tours', apiToursRouter);

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







