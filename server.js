var express = require('express');
var app = express();
var server = require('http').Server(app);
var ChatServer = require('./chatServer');
var io = require('socket.io')(server);

app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  return res.sendfile('views/index.html');
});

//this is server.listen not app.listen
server.listen(3000);
console.log('server started on port 3000');

var chat = new ChatServer(io);
chat.start();
