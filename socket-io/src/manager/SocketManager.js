import socketio from 'socket.io';
import AppManager from './AppManager';
import storage from '../storage/Storage';

const socketManager = class SocketManager extends AppManager {
    constructor(config, http){
        super(config);
        this.io = socketio(http);
        this.init();
    }
    
    init(){  
        this.io.on('connect', function(socket){
            socket.on('roomRequest', function(event){ 
                storage.map.set(this.client.id, this.client.id);
            });
            
            socket.on('disconnect', function(){
                console.log(this.client.id);
            });
        });
    }
    
    getInstance(){
        return this.io;
    }
}

export default socketManager;