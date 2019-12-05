import AppManager from './AppManager';
import { appEventEmitter, Events } from '../events/AppEventEmitter';

const roomManager = class RoomManager extends AppManager{
    constructor(config, socket){
        super(config)
        this.socket = socket;
        this.init();
    }
    
    init(){
        appEventEmitter.on(Events.ROOMGROUP, (event) => setImmediate(() => this.handleRoomGroup(event)))
    }
    
    handleRoomGroup(event){
        event.forEach(clientId => {
            console.log(this.socket.sockets.connected[clientId]);
            //let client = this.socket.sockets.connected[clientId];
            //console.log(client);
        });
        
        console.log(event);
    }
}

export default roomManager;