'use strict'
const http = require('http')
const app = require('./config/config')
const Server = http.Server(app)
const PORT = process.env.PORT || 8000
const io = require('socket.io')(Server)

Server.listen(PORT, () => console.log('Game server running on:', PORT))
const players = {}

app.get('/', function(req, res){
    res.sendFile(__dirname + '/user.html');
});
io.on('connection', socket => {
    socket.emit('connect', { hello: 'world'});
    // When a player connects
    socket.on('confirm', function (data){ 
        console.log(data);
    })
    console.log('Connection made')
    

    socket.on('disconnect', state => {
        delete players[socket.id]
        //io.emit('update-players', players)
    })


})
