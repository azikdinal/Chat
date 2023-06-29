import axios from "axios";

const URL = process.env.APP_URL

export const get_chat_by_id = (chatId) => {
    return async dispatch => {
        const url = URL + 'api/chat/' + chatId
        const res = await axios.get(url)
        const chat = res.data
        dispatch({type:"GET_CHATS", payload:chat})
    }
}
export const get_chats_by_userId = (userId) => {
    return async dispatch => {
        const url = URL + 'api/chat/user/' + userId
        const res = await axios.get(url)
        const chats = res.data
        dispatch({type:"GET_CHATS", payload:chats})
    }
}

export const delete_chat = (id) => {
    return async dispatch => {
        try {
            const url = URL + 'chat/open/' + id
            const chat = await axios.delete(url, {name})
            dispatch({type:"OPEN_CHAT", payload:id})
        }catch (e){
            console.log(e)
        }

    }
}


export const open_chat = () => {
    return async dispatch => {
        const url = URL + 'chat/open'
        const chat = await axios.post(url, {name})
        dispatch({type:"OPEN_CHAT", payload:chat})
    }
}
export const get_chats = () => {
    return async dispatch => {
        const url = URL + 'api/chat/'
        const res = await axios.get(url)
        const chats = res.data
        dispatch({type:"GET_CHATS", payload:chats})
    }
}