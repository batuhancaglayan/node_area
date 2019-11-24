import http from 'http';
import express from 'express';
import io from 'socket.io';
import path from 'path';
import cors from 'cors';

//const allowedOrigins = "http://localhost:* http://127.0.0.1:*";
const socketPath ='/socket';
const port = 9090;
const app = express(cors({ origin: '*' , credentials :  false}));

const server = http.createServer(app);
const socket = io(server);
  
  app.get('/', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.sendFile(path.resolve('./src/view/index.html'));
  });
  
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
  socket.on('connect', function(client) {
    console.log('A user connected');
    
    client.on('disconnect', function () {
      console.log('A user disconnected');
    });
  });
  
  server.listen(port, () => {
    console.log('Server running at http://127.0.0.1:' + port);
  });
  
  export default server;
  