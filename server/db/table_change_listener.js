const pool = require('../db/pool');

const listenToChatTableChanges = (userId, io) => {
    const notificationHandler = async ({channel, payload}) => {
        const userId_of_chat = parseInt(payload.slice(8).split(';')[0]);
        if (userId_of_chat === userId) {
            const chatId = parseInt(payload.split('; chatId: ')[1]);
            io.emit(channel, {chatId});
        }

    }

    pool.connect((err, client) => {
        if (err) {
            console.error('Ошибка при подключении к базе данных', err);
            return;
        }
        client.query('LISTEN new_chat');
        // Обработка уведомлений
        client.on('notification', notificationHandler);
    })
}
const listenToMessageTableChanges = (chatId, io) => {
    const notificationHandler = async ({channel, payload}) => {
        const chatId_of_message = parseInt(payload.split('; chatId: ')[1]);
        if (chatId_of_message === chatId) {
            const messageId = parseInt(payload.slice(11).split(';')[0]);

            io.emit("new_message", {chatId});
            // io.emit("new_message", {messageId});
        }
    }

    pool.connect((err, client) => {
        if (err) {
            console.error('Ошибка при подключении к базе данных', err);
            return;
        }
        client.query('LISTEN new_message');
        // Обработка уведомлений
        client.on('notification', notificationHandler);
    })
}



module.exports = {listenToChatTableChanges, listenToMessageTableChanges};
