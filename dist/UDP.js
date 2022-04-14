"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startUDPserver = void 0;
const dgram_1 = __importDefault(require("dgram"));
const startUDPserver = () => {
    const server = dgram_1.default.createSocket('udp4');
    server.on('error', (err) => {
        console.log(`UDP server error:\n${err.stack}`);
        server.close();
    });
    server.on('message', (msg, rinfo) => {
        console.log(`UDP server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });
    server.on('listening', () => {
        const address = server.address();
        console.log(`UDP server listening ${address.address}:${address.port}`);
    });
    server.bind(744);
    return server;
};
exports.startUDPserver = startUDPserver;
//# sourceMappingURL=UDP.js.map