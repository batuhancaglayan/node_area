import express from 'express';
import AppManager from './AppManager';
import path from 'path';

const expressManager = class ExpressManager extends AppManager {
    constructor(config){
        super(config);
        this.express = express();
        this.init();
    }
    
    init(){
        this.express.get('/', function(req, res) {
            res.sendFile(path.resolve('./src/view/index.html'));
        });
    }
    
    getInstance(){
        return this.express;
    }
}

export default expressManager;