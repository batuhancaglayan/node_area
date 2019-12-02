import Worker from './Worker';
import storage from '../storage/Storage';

const roomRequestWorker = class RoomRequestWorker extends Worker{
    constructor(interval, socket){
        super(interval, socket);
        setInterval(this.run(this.data), this.interval);
    }
    
    run(socket){
        var intervalHandler = function(){
            storage.map.forEach(function(key, value){
                console.log(key);
                socket.sockets.connected[key].emit("message", "aq");
            })
        }
        
        return intervalHandler;
    }
}

export default roomRequestWorker;