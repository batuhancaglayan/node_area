class SocketRoute {
    constructor(){
    }
    
    messageChannel(event){
        console.log(this.client);
        //this.clients[this.id].send("aq")
        //this.volatile.client.send("");
        //console.log(this.id);
        socketRoute.print(event);
    }
    
    print(event){
        //console.log(this);
        console.log('Received message from client!', event);
    }
    
    disconnectChannel(event){
        console.log('Server has disconnected', event);
    }
}

const socketRoute = new SocketRoute();
export default socketRoute;