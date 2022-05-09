var http = require('http');
var up = require('upper-case')


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(up.upperCase('Hello World!'));
}).listen(2020); 
