import socketio from 'socket.io';
import AppManager from './AppManager';
import { appEventEmitter, Events } from '../events/AppEventEmitter';

const socketManager = class SocketManager extends AppManager {
    constructor(config, http){
        super(config);
        this.io = socketio(http);
        this.init();
    }
    
    init(){
        this.io.on(Events.CONNECT, (socket) => this.connect(socket));
    }
    
    connect(socket){
        socket.on(Events.ROOMREQUEST, (event) => this.roomRequest(event, socket));
        socket.on(Events.SENDMESSAGE, (event) => this.sendMessage(event, socket));
        socket.on(Events.LEAVEROOM, (event) => this.leaveRoom(event, socket));
        socket.on(Events.DISCONNECT, (event) => this.disconnect(event, socket));
    }
    
    roomRequest(event, socket){
        appEventEmitter.emit(Events.ROOMREQUEST, socket.id);
    }

    sendMessage(event, socket){
        var groupId = event.groupId;
        this.io.to(groupId).emit(groupId, event.message);
    }

    leaveRoom(event, socket){
    }
  
    disconnect(event, socket){
        appEventEmitter.emit(Events.CANCELROOMREQUEST, socket.id);
    }

    getInstance(){
        console.log("aq1");
        return this.io;
    }
}

export default socketManager;