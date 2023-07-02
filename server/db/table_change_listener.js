const pool = require('../db/pool');

const listenToChatTableChanges = (userId, io) => {
    const notificationHandler = async ({channel, payload}) => {
        const userId_of_chat = parseInt(payload.split('; userId ')[1]);
        if (userId_of_chat === userId) {
            const chatId = parseInt(payload.slice(7).split(';')[0]);
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
let isListening = false; // Флаг для отслеживания состояния подписки

const listenToMessageTableChanges = (chatId, io) => {
    const notificationHandler =  ({channel, payload}) => {
        const chatId_of_message = parseInt(payload.slice(7));
        if (chatId_of_message === chatId) {
            const messageId = parseInt(payload.slice(11).split(';')[0]);
            io.emit(channel, {messageId});
        }
    }

    if (!isListening) {
        pool.connect((err, client) => {
            if (err) {
                console.error('Ошибка при подключении к базе данных', err);
                return;
            }
            client.query('LISTEN new_message');
            // Обработка уведомлений
            client.on('notification', notificationHandler);
        })

        isListening = true; // Установка флага подписки
    }
}

module.exports = {listenToChatTableChanges, listenToMessageTableChanges};
