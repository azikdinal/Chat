const http = require('http')
const app = require("./app")
const socketIo = require('socket.io')
const sequelize = require("./db/db");
const {listenToMessageTableChanges, listenToChatTableChanges} = require("./db/table_change_listener");

const server = http.createServer(app)

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
}) //in case server and client run on different urls
io.on('connection', socket => {
    console.log('client connected: ', socket.id)
    socket.emit("connection")

    socket.on("broadcast userId", async ({userId}) => {
        await sequelize.authenticate()
        await sequelize.sync()
        await listenToChatTableChanges(userId, socket)
    })
    socket.on("broadcast chatId", async ({chatId}) => {
        await listenToMessageTableChanges(chatId, socket)
    })
    socket.on('disconnect', (reason) => {
        console.log(reason)
    })
})


module.exports = {server, io}