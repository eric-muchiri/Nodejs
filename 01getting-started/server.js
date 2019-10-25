//http module
var http = require('http');
//where the application litsens
var host = '127.0.0.1';
var port = '3000';

var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, host, function(){
    console.log('Server litsening on port '+ port);
});