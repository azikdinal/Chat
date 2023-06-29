import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {chatReducer} from "./reducers/chatReducer.js";
import {userReducer} from "./reducers/userReducer.js";
import {messageReducer} from "./reducers/messageReducer.js";

const rootReducer = combineReducers({
    message: messageReducer,
    user: userReducer,
    chat: chatReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
