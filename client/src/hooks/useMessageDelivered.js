import {useEffect} from "react";
import {get_messages_by_chatId} from "../store/actions/messageActions.js";
import socket from "../sockets/socket.js";
import {useDispatch} from "react-redux";

export const useMessageDelivered = (chatId) => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(get_chat_messages(chatId)); // Вызывается при первичном рендере
    // }, []);

    useEffect(() => {
        const handleDelivered = () => dispatch(get_messages_by_chatId(chatId));
        socket.on("message sent", () => handleDelivered());
        return () => {
            socket.off("message sent", () => handleDelivered());
        };
    }, [dispatch]);
}