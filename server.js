'use strict';

var express = require('express');
var path = require('path')
var app = express();
var port = Number(process.env.PORT || 3005);
var http = require('http').Server(app);
var api = require('./timestamp.js');

// Homepage
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/:input', api);
 
// Start the server
http.listen(port, function(){
  console.log('Listening on: ' + port);
});

module.exports = app;