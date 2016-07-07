var express = require('express');
var path = require('path')
var port = 3005;
var app = express();
var http = require('http').Server(app);

// Homepage
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server
http.listen(port, function(){
  console.log('Listening on: ' + port);
});