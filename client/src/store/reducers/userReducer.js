const initialState = {
    isAuth: false,
    userId: null,
    token: '',
};


export const userReducer = (state = initialState, action) => {
    const data = action.payload
    switch (action.type) {
        case "SET_AUTH":
            console.log(data)
            return {...state, isAuth: true, id: data.id, token: data.token}
        case "SET_ID":
            return {...state, isAuth: true, id: data}
        default:
            return state;
    }
};