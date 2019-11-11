//required packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var pug = require('pug');

var port = 3000;

var app = express();
//example middleware
//express
app.use(function(req, res, next){
    console.log("Time: ", Date.now());
    next();
});

//set the view engine(after installing pug)
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
//setting the vies folder pug picks it automatically
app.set('views', path.join(__dirname, 'views'));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
//route for a get request
app.get('/', function(req, res){
    // res.send('Hello world!');
    res.render('index', {
        //dynamic values
        title: 'Hello World',
        showTitle: true,
        people: ['John', 'Steve', 'Eric']
    });
});
//route for an about page
app.get('/about', function(req, res){
    res.send('About page');
});

app.listen(port);
console.log("Server started on port "+port);

module.exports = app;