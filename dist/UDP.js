"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startUDPserver = void 0;
const dgram_1 = __importDefault(require("dgram"));
const connect = (num, resolve, reject) => {
    const client = dgram_1.default.createSocket('udp4');
    client.on('error', (err) => {
        console.log(`UDP server error:\n${err.stack}`);
        client.close();
        reject();
    });
    client.on('message', (msg, rinfo) => {
        console.log(`UDP server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });
    client.on('connect', () => {
        const address = client.address();
        console.log(`UDP server listening ${address.address}:${address.port}`);
        resolve(client);
    });
    client.bind(744, `10.0.0.${num}`);
};
exports.startUDPserver = new Promise((resolve, reject) => {
    for (let n = 1; n < 32; n++) {
        connect(n, resolve, reject);
    }
});
//# sourceMappingURL=UDP.js.map