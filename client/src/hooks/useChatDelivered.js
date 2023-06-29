import {useEffect} from "react";
import {get_chats_by_userId} from "../store/actions/chatActions.js";
import socket from "../sockets/socket.js";
import {useDispatch, useSelector} from "react-redux";


export const useChatDelivered = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.id)
    useEffect(() => {
        dispatch(get_chats_by_userId(userId)); // Вызывается при первичном рендере
    }, []);


    useEffect(() => {
        const handleChats = () => dispatch(get_user_chats(userId))
        socket.on('chat opened', () => handleChats())
        return () => {
            socket.off('chat opened', () => handleChats())
        }
    }, [dispatch]);

    return null
}