class SocketManager {
    constructor(){
        this.data = 'batuhan';
    }

    init(client){
        socketManager.deneme();
    }

    deneme(){
        console.log('deneme');
    }
}

const socketManager = new SocketManager();
export default socketManager;