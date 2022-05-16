const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

const indexRouter = require('./routers/indexRouter');
const loginRouter = require('./routers/loginRouter');
const productCartRouter = require('./routers/productCartRouter');
const productDetailRouter = require('./routers/productDetailRouter');
const registerRouter = require('./routers/registerRouter');
const createRouter = require('./routers/createRouter');
const editRouter = require('./routers/editRouter');



app.listen(port, (req,resp) => console.log('iniciando servidor en el puerto ' + port));

const publicPath = path.resolve(__dirname,'./public')

app.use(express.static('public'))

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', indexRouter)

app.get('/productDetail/:id', indexRouter);

app.get('/tours', indexRouter);

app.get('/login', loginRouter);

app.get('/productCart', productCartRouter);

// app.get('/productDetail', productDetailRouter);

app.get('/register', registerRouter);

app.get('/create', createRouter);

app.get('/edit', editRouter);



