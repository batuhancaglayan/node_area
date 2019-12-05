import List from 'collections/list';
import { appEventEmitter, Events } from '../events/AppEventEmitter';

class RoomRequestBuffer {
    constructor(config){
        this.config = config;
        this.roomSize = config.roomSize;
        this.bufferList = new List();
        this.rangeChangeListener = this.rangeChangeListener.bind(this);
        this.bufferList.addRangeChangeListener(this.rangeChangeListener);
        appEventEmitter.on(Events.ROOMREQUEST, (event) => setImmediate(() => this.handleRoomRequest(event)));
        appEventEmitter.on(Events.CANCELROOMREQUEST, (event) => setImmediate(() => this.handleCancelRoomRequest(event)))
    }  
    
    handleRoomRequest(event){
        if (this.bufferList.has(event)){
            console.log("request exist for client id: " + event);
            return;
        }
        
        this.bufferList.push(event);
    }

    handleCancelRoomRequest(event){
        this.bufferList.delete(event); 
    }
       
    rangeChangeListener(plus, minus, index){
        var quotient = Math.floor(this.bufferList.length / this.roomSize);
        if (quotient < 1){
            return;
        }
        
        var roomGroupList = [];
        for (let i = 0; i < quotient; i++) {
            let aq = this.bufferList.splice(0,this.roomSize); 
            roomGroupList.push(this.bufferList.splice(0,this.roomSize));
        }  
        
        appEventEmitter.emit(Events.ROOMGROUP, roomGroupList);
    }
}

const roomRequestBuffer = new RoomRequestBuffer({ roomSize: 4 });
export default roomRequestBuffer;