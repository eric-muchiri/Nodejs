//required packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 3000;

var app = express();
//example middleware
//express
app.use(function(req, res, next){
    console.log("Time: ", Date.now());
    next();
});
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
//route for a get request
app.get('/', function(req, res){
    res.send('Hello world!');
});
//route for an about page
app.get('/about', function(req, res){
    res.send('About page');
});

app.listen(port);
console.log("Server started on port "+port);

module.exports = app;