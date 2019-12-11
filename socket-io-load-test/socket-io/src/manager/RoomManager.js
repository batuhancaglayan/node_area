import AppManager from './AppManager';
import { appEventEmitter, Events } from '../events/AppEventEmitter';
import uuidv4 from 'uuid/v4';

const roomManager = class RoomManager extends AppManager{
    constructor(config, socket){
        super(config);
        this.requestCount = 0;
        this.GROUPPREFIX = 'GROUP_';
        this.socket = socket;
        this.init();
    }
    
    init(){
        appEventEmitter.on(Events.ROOMGROUP, (event) => setImmediate(() => this.handleRoomGroup(event)))
    }
    
    handleRoomGroup(event){
        
        // var room = this.socket.sockets.in(groupId);
        // room.on('join', function() {
        //     console.log("Someone joined the room." + event);
        //     event.forEach(clientId => {
        //         let client = this.socket.sockets.connected[clientId];
        //         console.log(client.rooms);
        //     });
        // });
        
        // let clientId = event[0];
        // this.socket.sockets.connected[clientId].emit("message", "aq");
        
        event.forEach(candidateRoomList => {
            let groupId = this.GROUPPREFIX + uuidv4();
            candidateRoomList.forEach(clientId => {
                let client = this.socket.sockets.connected[clientId];
                client.join(groupId);
                client.emit('room', {'groupId' : groupId});
            });
            
            //client.emit('message', 'aq');
            // client.emit('q', 'q');
            // client.emit('message', 'aaa');
            // this.socket.to(groupId).emit({'groupId': groupId});
        });
        
        // this.requestCount = this.requestCount + 4;
        // console.log(this.requestCount);
        
        
    }
}

export default roomManager;