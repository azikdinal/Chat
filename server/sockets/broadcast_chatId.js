const {ChatMessage, Message} = require("../db/models");
const {listenToMessageTableChanges} = require("../db/table_change_listener");

const broadcast_chatId = socket => {

    socket.on("broadcast chatId", async ({chatId}) => {
        socket.emit("broadcast messages", await getMessages(chatId))
        await listenToMessageTableChanges(chatId, socket)
    })
    const getMessages = async (chatId) => {
        try {
            const chat_messages = await ChatMessage.findAll({where: {chatId}})
            const messages = chat_messages.map(async obj => {
                const {messageId} = obj
                return await Message.findOne({where: {id: messageId}})
            })
            return await Promise.all(messages)
        } catch (e) {
            console.log(e)
            return []
        }
    }
}

module.exports = broadcast_chatId