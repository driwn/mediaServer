import dgram from 'dgram';

const server = dgram.createSocket('udp4');

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