var express = require('express');
var router = express.Router();

//login page -get
router.get('/login', function(req, res){
    res.render('login');
});

//register page - get
router.get('/register', function(req, res){
    res.render('register');
});

module.exports = router;