import List from 'collections/list';
import { appEventEmitter, Events } from '../events/AppEventEmitter';

class RoomRequestBuffer {
    constructor(config){
        this.config = config;
        this.roomRequestCount = 0;
        this.roomSize = config.roomSize;
        this.bufferList = new List();
        //this.rangeChangeListener = this.rangeChangeListener.bind(this);
        //this.bufferList.addRangeChangeListener(this.rangeChangeListener);
        appEventEmitter.on(Events.ROOMREQUEST, (event) => setImmediate(() => this.handleRoomRequest(event)));
        appEventEmitter.on(Events.CANCELROOMREQUEST, (event) => setImmediate(() => this.handleCancelRoomRequest(event)));
        setInterval((event) => this.checkCandidateRoom(event), 1000);
    }
    
    handleRoomRequest(event){
        if (this.bufferList.has(event)){
            console.log("request exist for client id: " + event);
            return;
        }
        
        // this.roomRequestCount++;
        // console.log(this.roomRequestCount);
        
        this.bufferList.push(event);
    }
    
    handleCancelRoomRequest(event){
        this.bufferList.delete(event); 
    }
    
    checkCandidateRoom(event){
        var quotient = Math.floor(this.bufferList.length / this.roomSize);
        if (quotient < 1){
            return;
        }
        
        var roomGroupList = [];
        for (let i = 0; i < quotient; i++) {
            roomGroupList.push(this.bufferList.splice(0,this.roomSize));
        }  
        
        appEventEmitter.emit(Events.ROOMGROUP, roomGroupList);
    }
    
    // rangeChangeListener(plus, minus, index){
    
    // }
}

const roomRequestBuffer = new RoomRequestBuffer({ roomSize: 4 });
export default roomRequestBuffer;