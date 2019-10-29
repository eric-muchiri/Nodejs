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

app.listen(port);
console.log("Server started on port "+port);

module.exports = app;