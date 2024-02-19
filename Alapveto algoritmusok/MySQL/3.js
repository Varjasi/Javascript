var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

// Templating engine beállítása
app.set('view engine', 'ejs');

http.createServer(function (req, res) {
  fs.readFile('6.html', function(err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Változó beállítása
      var name = 'Hello, World!';
      // EJS nézet renderelése
      res.render('index', { name: name });
      res.write(data);
      return res.end();
    }
  });
}).listen(8080);
