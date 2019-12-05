import socketio from 'socket.io';
import AppManager from './AppManager';
import { appEventEmitter, Events } from '../events/AppEventEmitter';

const socketManager = class SocketManager extends AppManager {
    constructor(config, http){
        super(config);
        console.log("socketManager");
        this.io = socketio(http);
        this.init();
    }
    
    init(){
        this.io.on('connect', (socket) => this.connect(socket));
    }
    
    connect(socket){
        socket.on('roomRequest', (event) => this.roomRequest(event, socket));
        socket.on('disconnect', (event) => this.disconnect(event, socket));
    }
    
    roomRequest(event, socket){
        appEventEmitter.emit(Events.ROOMREQUEST, socket.id);
    }
    
    disconnect(event, socket){
        appEventEmitter.emit(Events.CANCELROOMREQUEST, socket.id);
    }

    getInstance(){
        return this.io;
    }
}

export default socketManager;