const initialState = {
    chats: []
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CHATS":
            return {...state, chats: action.payload}
        case "ADD_CHAT":
            return state
        default:
            return state
    }
}