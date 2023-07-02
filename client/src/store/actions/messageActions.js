import {socket} from "../../sockets/socket.js";
import axios from "axios";

const URL = process.env.APP_URL + 'api/message/'

export const get_messages_by_chatId = chatId => {
    return async dispatch => {
        try {
            socket.emit('broadcast chatId', {chatId})
            socket.on('broadcast messages', messages => {
                dispatch({type: 'NEW_MESSAGE', payload: messages})
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const get_message_by_id = messageId => {
    return async dispatch => {
        const message = await axios.get(URL + messageId)
        console.log(message)
        dispatch({type: "ADD_MESSAGE", payload: message})
    }
}

export const set_chat_id = chatId => {
    return dispatch => {
        dispatch({type: "SET_CHAT_ID", payload: chatId})
    }
}