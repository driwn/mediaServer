import dgram from 'dgram'

const connect = (num: number, resolve: any, reject: any) => {
    const client = dgram.createSocket('udp4')

    client.on('error', (err) => {
        console.log(`UDP server error:\n${err.stack}`)
        client.close()
        reject()
    })

    client.on('message', (msg, rinfo) => {
        console.log(
            `UDP server got: ${msg} from ${rinfo.address}:${rinfo.port}`
        )
    })

    client.on('connect', () => {
        const address = client.address()
        console.log(`UDP server listening ${address.address}:${address.port}`)
        resolve(client)
    })

    client.bind(744, `10.0.0.${num}`)
}
export const startUDPserver = new Promise<dgram.Socket>((resolve, reject) => {
    for (let n = 1; n < 32; n++) {
        connect(n, resolve, reject)
    }
})
