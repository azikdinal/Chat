const initialState = {
    messages: [],
    lastMessage: '',
    chatId: null
};


export const messageReducer = (state = initialState, action) => {
    const data = action.payload
    switch (action.type) {
        case 'SET_CHAT_ID':
            return {...state, chatId: data};
        case 'ADD_MESSAGE':
            return {...state, messages: [...state.messages, action.payload]};
        case 'NEW_MESSAGE':
            return {...state, messages: data, lastMessage: state.messages.pop()};
        default:
            return state;
    }
};
