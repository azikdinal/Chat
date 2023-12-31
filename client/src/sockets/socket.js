// Клиент

import {io} from 'socket.io-client';

export const socket = io(process.env.APP_URL);


export const openSocketConnection = (userId) => {
    socket.on('connection', () => {
        console.log('Connected! Id: ', socket.id);
    });

    socket.emit('broadcast userId', {userId});

    socket.on('error', () => console.log("Couldn't connect to server!"));

    socket.on('close', () => console.log('Disconnected'));
};
