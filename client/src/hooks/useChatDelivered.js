import {useEffect} from "react";
import {get_chat_by_id, get_chats_by_userId} from "../store/actions/chatActions.js";
import {useDispatch} from "react-redux";
import {socket} from "../sockets/socket.js";


export const useChatDelivered = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_chats_by_userId()); // Вызывается при первичном рендере
    }, []);


    useEffect(() => {
        const handleChats = (chatId) => {
            dispatch(get_chat_by_id(chatId))
        }

        socket.on('new_chat', ({chatId}) => handleChats(chatId))
        return () => {
            socket.off('new_chat', ({chatId}) => handleChats(chatId))
        }
    }, [dispatch]);

    return null
}