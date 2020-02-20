import { Socket } from "dgram";

const SERVER_IP = window.location.host
let socket = null

socket = io.connect(SERVER_IP)
this.emitTest();
document.open();
document.write("<h1>SERMINER</h1>");
document.close();
console.log('client js ran');

socket.on("connection", () =>{
    socket.emit('test', {
        socket = this.socket
        
    })
})

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
