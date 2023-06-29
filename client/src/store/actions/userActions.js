import axios from "axios";

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
            const id = result.data.decoded.id
            return dispatch({type: 'SET_ID', payload: id})
        } catch (e) {
            console.log(e)
        }
    }
}