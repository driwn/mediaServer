"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectTCP = void 0;
const net_1 = __importDefault(require("net"));
const connectTCP = () => {
    const client = new net_1.default.Socket({ allowHalfOpen: true, readable: true });
    client.connect(50123, '193.104.203.194', function () {
        console.log('Connected');
    });
    client.on('data', function (data) {
        console.log('Received: ' + data);
    });
    client.on('error', (err) => {
        console.log(err);
    });
    client.on('timeout', () => {
        console.log('timeout');
    });
    client.on('close', function () {
        console.log('Connection closed');
    });
    return client;
};
exports.connectTCP = connectTCP;
//# sourceMappingURL=UDP.js.map