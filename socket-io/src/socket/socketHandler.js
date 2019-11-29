import io from 'socket.io';
import socketRoute from './socketRoute';

const SocketHandler = class SocketHandler {
    constructor(server) {
        this.server = server;
    }
    
    init(){
        this.socket = io(this.server);
        this.socket.on('connect', this.connect);
    }
    
    connect(client){
        //console.log(client.id);
        client.on('message', socketRoute.messageChannel);
    }
}

module.exports = SocketHandler;
//export default SocketHandler;