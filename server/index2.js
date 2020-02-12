const SERVER_IP = window.location.host
let socket = null

socket = io(SERVER_IP)
this.emitTest()
document.write(Surmerner)
/*

Need to be available at any time and must contain a way to pass the 
update to TSS 
recieveStateUpdate(){
    socket.on('client-update', update =>
    const {timestamp, stateupdate} = update
    TSS.applyUpdate
    )
}

preform a local operation on TSS state and then emit that update to 
the server
emitStateUpdate () {
    socket.emit('server-update', TSSUpdate)
    })
}
emitTest () {
    socket.emit('test', {
        socket = this.socket
    })
}*/
