var http = require('http');
var server = http.createServer(function (req, res) {
     
     console.log('User Request');
     res.end('Hello world');


}).listen(3000);