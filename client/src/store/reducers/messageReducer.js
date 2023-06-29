const initialState = {
    messages: [],
    lastMessage: '',
    chatId: null
};


export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHAT_ID':
            return {...state, chatId: action.payload};
        case 'NEW_MESSAGE':
            return {...state, messages: action.payload, lastMessage: state.messages.pop()};
        default:
            return state;
    }
};
