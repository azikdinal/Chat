const http = require('http')
const app = require("./app")
const socketIo = require('socket.io')

const server = http.createServer(app)
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
}) //in case server and client run on different urls
io.on('connection', (socket) => {
    console.log('client connected: ', socket.id)
    socket.emit("connection")
    socket.on('disconnect', (reason) => {
        console.log(reason)
    })
})


module.exports = {server, io}