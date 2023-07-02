import {socket} from "../../sockets/socket.js";

export const get_chats_by_userId = () => {
    return async dispatch => {
        socket.on("broadcast chats", chats => {
            dispatch({type:"GET_CHATS", payload:chats})
        })
    }
}
export const get_chat_by_id = (chatId) => {
    console.log("RENDER")

    return async dispatch => {
            dispatch({type:"ADD_CHAT", payload:{id: chatId}})
    }
}

