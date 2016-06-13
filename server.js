var http = require('http');
var fs = require('fs');
var file = fs.readFileSync('index.html');
var server = http.createServer(function (req, res) {
     
     console.log('User Request');
     res.writeHead(200, {'content-type': 'text/plain'});
     res.end(file);

}).listen(3000);
