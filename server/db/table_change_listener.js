const {io} = require('../server')
const pool = require('../db/pool')

// Функция для прослушивания изменений в таблице
const listenToTableChanges = () => {
    pool.connect((err, client, done) => {
        if (err) {
            console.error('Ошибка при подключении к базе данных', err);
            return;
        }

        client.query('LISTEN messages_changes');
        client.query('LISTEN chats_changes');

        // Обработка уведомлений
        client.on('notification', (notification) => {
            const message = {
                id: Date.now(),
                text: "Hello World!"
            }
            const res = notification.payload
            if (res.includes('insert message')) {
                io.emit('message sent')
            }
            if (res.includes('insert chat')) {
                io.emit('chat opened')
            }
            // if(res.includes('update')) {
            //     console.log('Message updated')
            // }
            // if(res.includes('delete')) {
            //     console.log('Message deleted')
            // }


        });
    });
};

module.exports = listenToTableChanges

