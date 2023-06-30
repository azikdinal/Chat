import axios from "axios";
import {openSocketConnection, socket} from "../../sockets/socket.js";

const URL = process.env.APP_URL + 'api/user/'
export const sign_up = (email, password) => {
    return async dispatch => {
        try {
            const url = URL + 'sign'
            const token = await axios.post(url, {email, password})
            localStorage.setItem("token", token.data.token)
            dispatch({type: 'SET_AUTH', payload: token.data})
        } catch (e) {
            console.log(e)
        }
    }
}

export const log_in = (email, password) => {
    return async dispatch => {
        const url = URL + 'login'
        try {
            const token = await axios.post(url, {email, password})
            localStorage.setItem("token", token.data.token)
            dispatch({type: 'SET_TOKEN', payload: token.data.token})
        } catch (e) {
            console.log(e)
        }
    }
}
export const sign_in_by_token = (token) => {
    return async dispatch => {
        const url = URL + 'check'
        try {
            const result = await axios.post(url, {token})
            const userId = result.data.decoded.id
            openSocketConnection(userId)
            console.log(`userId: ${userId}`)
            return dispatch({type: 'SET_ID', payload: userId})
        } catch (e) {
            console.log(e)
        }
    }
}