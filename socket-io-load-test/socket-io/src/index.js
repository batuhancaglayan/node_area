import em from '../src/manager/ExpressManager';
import hm from '../src/manager/HttpManager';
import sm from '../src/manager/SocketManager';
import rm from '../src/manager/RoomManager';
import rrb from '../src/storage/RoomRequestBuffer';

const server = new hm({port: 9090}, new em({}).getInstance()) 
const socketManager = new sm({}, server.getInstance());
const RoomManager = new rm({}, socketManager.getInstance());

// var pid = process.pid;

// console.log('Listening on port', port, ', log level', logLevel);

setInterval(function () {
    console.log('Conn:', socketManager.getConnCount());
//   usage.lookup(pid, {keepHistory: true}, function (err, result) {
//     var memInMb = result.memory / (1024 * 1024);
//     var cpu = result.cpu;
//     console.log('Conn:', connCount + ', Mem:', memInMb.toFixed(1) + ',cpu:', cpu);
//   });
}, 1000);
