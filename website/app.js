const express = require('express');
const path = require('path');
const app = express();

app.listen(8000, (req,resp)=> console.log('iniciando servidor en el puerto 8000'));

const publicPath = path.resolve(__dirname,'./public')
app.use(express.static('public'))

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/index.html'));
})
app.get('/login', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/login.html'));
})
app.get('/productCart', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/productCart.html'));
})
app.get('/productDetail', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/productDetail.html'));
})
app.get('/register', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/register.html'));
})

app.get('/index2', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/index2.html'));
})

