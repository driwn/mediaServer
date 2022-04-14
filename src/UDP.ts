import dgram from 'dgram'

export const startUDPserver = () => {
    const client = dgram.createSocket('udp4')

    client.on('error', (err) => {
        console.log(`UDP server error:\n${err.stack}`)
        client.close()
    })

    client.on('message', (msg, rinfo) => {
        console.log(
            `UDP server got: ${msg} from ${rinfo.address}:${rinfo.port}`
        )
    })

    client.on('connect', () => {
        const address = client.address()
        console.log(`UDP server listening ${address.address}:${address.port}`)
    })

    client.bind(744, '10.0.0.1')

    return client
}
