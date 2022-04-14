"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const net_1 = __importDefault(require("net"));
const port = 50123;
const adress = '193.104.203.194';
const connect = () => {
    const server = new net_1.default.Server();
    server.listen(port, function () {
        console.log(`Server listening for connection requests on socket localhost:${port}`);
    });
    server.on('connection', function (socket) {
        console.log('A new connection has been established.');
        socket.on('data', function (chunk) {
            console.log(`Data received from client: ${chunk.toString()}`);
        });
        socket.on('end', function () {
            console.log('Closing connection with the client');
        });
        socket.on('error', function (err) {
            console.log(`Error: ${err}`);
        });
    });
};
exports.connect = connect;
//# sourceMappingURL=UDP.js.map