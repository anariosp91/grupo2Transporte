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







