import em from '../src/manager/ExpressManager';
import hm from '../src/manager/HttpManager';
import sm from '../src/manager/SocketManager';
import rm from '../src/manager/RoomManager';
import rrb from '../src/storage/RoomRequestBuffer';

const server = new hm({port: 9090}, new em({}).getInstance()) 
const socketManager = new sm({}, server.getInstance());
const RoomManager = new rm({}, socketManager.getInstance());
