import EventEmitter from 'events';

class AppEventEmitter extends EventEmitter{}
const appEventEmitter = new AppEventEmitter();

const Events = Object.freeze({
    ROOMREQUEST : 'roomRequest',
    CANCELROOMREQUEST: 'CANCELROOMREQUEST',
    SENDMESSAGE: 'sendMessage',
    CONNECT: "connect",
    LEAVEROOM: 'leaveRoom',
    DISCONNECT: "disconnect",
    ROOMGROUP: 'ROOMGROUP',
    CANDIDATEGROUP: 'CANDIDATEGROUP'
});

export {
    appEventEmitter,
    Events
} 