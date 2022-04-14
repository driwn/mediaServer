import net from 'net'

export const connectTCP = () => {
    const client = new net.Socket({ allowHalfOpen: true, readable: true })
    client.connect(50123, '193.104.203.194', function () {
        console.log('Connected')
    })
    client.on('data', function (data: any) {
        console.log('Received: ' + data)
    })
    client.on('error', (err) => {
        console.log(err)
    })
    client.on('timeout', () => {
        console.log('timeout')
    })
    client.on('close', function () {
        console.log('Connection closed')
    })
    return client
}
