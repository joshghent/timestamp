'use strict';

var express = require('express');
var path = require('path')
var app = express();
var port = 3005;
var http = require('http').Server(app);

// Homepage
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});


// API
app.get('/:input', function(req, res){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var input = req.params.input;

  input = /^\d+$/.test(input) ? parseInt(input) * 1000 : input;
  var date = new Date(input);

  if(isNaN(date) === false && date != null){
    res.json({
      "unix"   : Date.parse(date) / 1000,
      "natural": date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getUTCFullYear()
    });
  } else { res.sendStatus(400); }
});

// Start the server
http.listen(port, function(){
  console.log('Listening on: ' + port);
});