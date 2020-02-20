/*var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('user.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080)
*/
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
app.use(express.static('server'))
module.exports = app

const http = require('http')
const Server = http.Server(app)
const PORT = process.env.PORT || 8000
const io = require('socket.io')(Server)

Server.listen(PORT, () => console.log('server running on:', PORT))

app.get('/', function(req, res){
  res.read(path.join(__dirname + '/user.html'));
  res.sendFile(path.join(__dirname + '/index2.js'));
});


    io.on('connection', function(Socket){
      console.log('new connection ' + Socket.id);
      Socket.on('test', function(data){
        console.log('sent id: ' + data)
      });
    });

    /* Socket.on('server-update', state => {
    console.log(state)
    TSS.applyupdate(state)
    })
    /* For repeated state update messages
    Alert "Hello" every 3 seconds (3000 milliseconds):

setInterval(function(){ alert("Hello"); }, 3000);*/
