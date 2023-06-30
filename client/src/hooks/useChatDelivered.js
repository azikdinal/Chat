import {useEffect} from "react";
import {get_chats_by_userId} from "../store/actions/chatActions.js";
import {useDispatch, useSelector} from "react-redux";
import {socket} from "../sockets/socket.js";


export const useChatDelivered = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.id)

    useEffect(() => {
        dispatch(get_chats_by_userId(userId)); // Вызывается при первичном рендере
    }, []);


    useEffect(() => {
        const handleChats = () => dispatch(get_chats_by_userId(userId))
        // socket.on('new_chat', () => handleChats())
        // return () => {
        //     socket.off('new_chat', () => handleChats())
        // }
    }, [dispatch]);

    return null
}