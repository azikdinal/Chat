import axios from "axios";

const URL = process.env.APP_URL

export const get_messages_by_chatId = () => {
    return async dispatch => {
        const url = URL + 'api/message/' + chatId
        try {
            const json = await axios.get(url)
            const messages = json.data
            dispatch({type: 'NEW_MESSAGE', payload: messages})
        } catch (e) {
            console.log(e)
        }
    }
}

export const set_chat_id = chatId => {
    return dispatch => {
        dispatch({type:"SET_CHAT_ID", payload: chatId})
    }
}