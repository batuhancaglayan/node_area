import http from 'http';
import express from 'express';
import io from 'socket.io';
import path from 'path';

const port = 9090;
const app = express();

const server = http.createServer(app);
const socket = io(server);
  
  app.get('/', function(req, res) {
    console.log("aq");
    res.header('Access-Control-Allow-Origin', '*');
    res.sendFile(path.resolve('./src/view/index.html'));
  });
  
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  server.listen(port, () => {
    console.log('Server running at http://127.0.0.1:' + port);
  });
  
  socket.on('connect', function(client){
    console.log('connection');
    // Success!  Now listen to messages to be received
    client.on('message',function(event){
      console.log('Received message from clientss!', event);
    });
    client.on('disconnect',function(){
      //clearInterval(interval);
      console.log('Server has disconnected');
    });
  });
  
  export default server;
  