var SocketIO = require('socket.io-client'),
argv = require('optimist').argv;

var n = argv.n || 30;
var b = argv.b || 200; // bucket-size
var host = argv.h || 'ws://localhost:9090';

var sockets = [];
const groupSocketMap = new Map();

var msgReceived = 0;
var connectionCount = 0;
var disconnectionCount = 0;
var reconn = 0;

var setupSocket = function setupSocket(socket, id) {
    //socket.data = {id: id};
    socket.on('connect', function () {
        connectionCount++;
    });
    
    socket.on('disconnect', function () {
        connectionCount--;
        disconnectionCount++;
    });
    
    socket.on('reconnect', function () {
        reconn++;
    });
    
    socket.on('error', function (err) {
        console.log('Error:', err);
    })
    
    
    socket.on('echo', function (msg) {
        console.log(this.data.id, 'received', msg);
    });
    
    socket.on('room', function(data) {
        var groupId = data.groupId;  
        groupSocketMap.set(socket.id, groupId);
        socket.on(groupId, function(text) {
            msgReceived++;
        });
    });
}

var startTest = function startTest() {
    setTimeout(function () {
        setInterval(() => {
            sockets.forEach(socket => {
                let groupId = groupSocketMap.get(socket.id);
                socket.emit('sendMessage', {'groupId': groupId, 'message': 'daleeee'});
            });
            
            console.log('Connection count:', connectionCount, 'dis:', disconnectionCount, 're:', reconn, 'groupSocketMap count: ' + groupSocketMap.size, ' meesage received: ' , msgReceived);
            msgReceived = 0;
        }, 1000);
    }, 2000);
}

var remaining = n * b;
var socketsToConnect = 0;

var tryMoreConnection = function tryMoreConnection() {
    if (socketsToConnect == connectionCount) {
        for (let i = 0; i < b; i++) {
            (function (j) {
                let socket = SocketIO.connect(host, {
                    'force new connection': true,
                    'reconnect': true,
                    'reconnection': true,
                    'upgrade': false, 
                    'transports': ['websocket']
                });
                setupSocket(socket, j);
                sockets.push(socket);
                socketsToConnect++;
                remaining--;
                socket.emit('roomRequest', 'new room request');
            })(i);
        }
    }
    
    // Check if we have more clients to simulate.
    if (remaining > 0) {
        setTimeout(function () {
            tryMoreConnection();
        }, 100);
    }
}

tryMoreConnection();

console.log('Starting stress test client, host :', host + ', socket # :', n);
startTest();