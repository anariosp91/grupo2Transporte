const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 8000;


const indexRouter = require('./routers/indexRouter');
const usersRouter = require('./routers/usersRouter');
const toursRouter = require('./routers/toursRouter');

app.listen(port, (req,resp) => console.log('iniciando servidor en el puerto ' + port));

const publicPath = path.resolve(__dirname,'./public')

app.use(express.static('public'))

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', indexRouter)

app.use('/tours', toursRouter);

app.use('/users', usersRouter);







