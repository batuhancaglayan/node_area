import http from 'http';
import AppManager from './AppManager';

const httpManager = class HttpManager extends AppManager {
    constructor(config, express){
        super(config);
        this.server = http.createServer(express); 
        this.init();
    }
    
    init(){  
        this.server.listen(this.config.port, () => {
            console.log('Server running at http://127.0.0.1:' + this.config.port);
        });
    }
    
    getInstance(){
        return this.server;
    }
}

export default httpManager;