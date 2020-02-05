const http = require('http')
const express = require('express')
const app = express()
const Server = http.Server(app)
const PORT = process.env.PORT || 8000
const io = require('socket.io')(Server)

Server.listen(PORT, () => console.log('Game server running on:', PORT))
const players = {}

io.on('connection', socket => {
    // When a player connects
    socket.on('new-player', state => {
        console.log('New player joined with state:', state)
        players[socket.id] = state
        // Emit the update-players method in the client side
       // io.emit('update-players', players)
       
    })

    socket.on('disconnect', state => {
        delete players[socket.id]
        //io.emit('update-players', players)
    })



})