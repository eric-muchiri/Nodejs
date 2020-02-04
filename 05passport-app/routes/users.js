var express = require('express');
var router = express.Router();

//login page -get
router.get('/login', function(req, res){
    res.send('LOGIN');
});

//register page - get
router.get('/register', function(req, res){
    res.send('REGISTER');
});

module.exports = router;