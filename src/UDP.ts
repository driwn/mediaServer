import Net from 'net'
const port = 50123
const adress = '193.104.203.194'

export const connect = () => {
    const server = new Net.Server()

    server.listen(port, function () {
        console.log(
            `Server listening for connection requests on socket localhost:${port}`
        )
    })

    server.on('connection', function (socket: any) {
        console.log('A new connection has been established.')

        socket.on('data', function (chunk: any) {
            console.log(`Data received from client: ${chunk.toString()}`)
        })

        socket.on('end', function () {
            console.log('Closing connection with the client')
        })

        socket.on('error', function (err: any) {
            console.log(`Error: ${err}`)
        })
    })
}
