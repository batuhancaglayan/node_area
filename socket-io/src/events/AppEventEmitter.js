import EventEmitter from 'events';

class AppEventEmitter extends EventEmitter{}
const appEventEmitter = new AppEventEmitter();

const Events = Object.freeze({
    ROOMGROUP: 'ROOMGROUP',
    CANDIDATEGROUP: 'CANDIDATEGROUP',
    ROOMREQUEST : 'ROOMREQUEST',
    CANCELROOMREQUEST: 'CANCELROOMREQUEST'
});

export {
    appEventEmitter,
    Events
} 