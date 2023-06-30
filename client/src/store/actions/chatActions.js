import axios from "axios";

const URL = process.env.APP_URL

export const get_chats_by_userId = (userId) => {
    return async dispatch => {
        const url = URL + 'api/chat/' + userId
        const res = await axios.get(url)
        const chats = res.data
        dispatch({type:"GET_CHATS", payload:chats})
    }
}
