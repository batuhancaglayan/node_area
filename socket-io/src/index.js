import em from '../src/manager/ExpressManager';
import hm from '../src/manager/HttpManager';
import sm from '../src/manager/SocketManager';
import rrw from '../src/worker/RoomRequestWorker';

const server = new hm({port: 9090}, new em({}).getInstance()) 
const socketManager = new sm({}, server.getInstance());
const roomRequestWorker = new rrw(3000, socketManager.getInstance());
