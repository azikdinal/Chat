const {UserChat, Chat} = require("../db/models");

const getMessages = async (userId) => {
    try {
        const chat_messages = await UserChat.findAll({where: {userId}})
        const promise_chats = chat_messages.map(async obj => {
            const {chatId} = obj
            return await Chat.findOne({where: {id: chatId}})
        })
        const chats = await Promise.all(promise_chats)
        return chats
    } catch (e) {
        console.log(e)
        return []
    }
}

const broadcast_userId = async (socket, userId) => {
    socket.emit("broadcast chats", await getMessages(userId))
}

module.exports = broadcast_userId