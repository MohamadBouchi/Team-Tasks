var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, function(){
    console.log('listening');
});

var io = socket(server);

io.on('connection', function(socket){
    console.log('connected');
})