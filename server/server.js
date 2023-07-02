const http = require('http')
const app = require("./app")
const broadcast_userId = require("./sockets/broadcast_userId");
const broadcast_chatId = require("./sockets/broadcast_chatId");
const server = http.createServer(app)
const socketIo = require('socket.io')
const {listenToChatTableChanges, listenToMessageTableChanges} = require("./db/table_change_listener");

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
}) //in case server and client run on different urls


io.on('connection', socket => {
    console.log('client connected: ', socket.id)

    socket.on("broadcast userId", async ({userId}) => {
        console.log("userId recieved " + userId)
        await broadcast_userId(socket, userId) // To get all chats of user
        await listenToChatTableChanges(userId, io)
    })

    broadcast_chatId(socket) // To get all messages from chat


    socket.on('disconnect', (reason) => {
        console.log(reason)
    })
})


module.exports = {server, io}