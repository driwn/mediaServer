"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startUDPserver = void 0;
const dgram_1 = __importDefault(require("dgram"));
const startUDPserver = () => {
    const client = dgram_1.default.createSocket('udp4');
    client.on('error', (err) => {
        console.log(`UDP server error:\n${err.stack}`);
        client.close();
    });
    client.on('message', (msg, rinfo) => {
        console.log(`UDP server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });
    client.on('connect', () => {
        const address = client.address();
        console.log(`UDP server listening ${address.address}:${address.port}`);
    });
    client.bind(744, '10.0.0.1');
    return client;
};
exports.startUDPserver = startUDPserver;
//# sourceMappingURL=UDP.js.map