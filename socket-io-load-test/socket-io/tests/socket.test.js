import io from 'socket.io-client';
import { Events } from '../src/events/AppEventEmitter';
import logger from '../src/utils/logger';

// initSocket returns a promise
// success: resolve a new socket object
// fail: reject a error
const initSocket = () => {
    return new Promise((resolve, reject) => {
        // create socket for communication
        const socket = io("http://localhost:9090", {
            "reconnection delay": 0,
            "reopen delay": 0,
            "force new connection": true
        });
        
        // define event handler for sucessfull connection
        socket.on(Events.CONNECT, () => {
            logger.info("connected");
            resolve(socket);
        });
        
        // if connection takes longer than 5 seconds throw error
        setTimeout(() => {
            reject(new Error("Failed to connect wihtin 5 seconds."));
        }, 5000);
    }
    );
};

describe("test suit: Echo & Bello", () => {
    test("test: ECHO", async () => {
        const socketClient = await initSocket();
        // const serverResponse = new Promise((resolve, reject) => {
        //     // define a handler for the test event
        //     socketClient.on(ev.res_ECHO, data4Client => {
        //         //process data received from server
        //         const { message } = data4Client;
        //         logger.info("Server says: " + message);
                
        //         // destroy socket after server responds
        //         destroySocket(socketClient);
                
        //         // return data for testing
        //         resolve(data4Client);
        //     });
        // });
        
        // // if response takes longer than 5 seconds throw error
        // setTimeout(() => {
        //     reject(new Error("Failed to get reponse, connection timed out..."));
        // }, 5000);
    }); 
});