import axios from "axios";


const URL = process.env.APP_URL

export const sendMessage = async (message) => {
    const url = URL + 'api/message/send'
    try {
        const response = await axios.post(url, {
            text: message,
            isUser: true
        })

    } catch (e) {
        console.log(e)
    }
    return message
}