import {useEffect} from "react";
import {get_messages_by_chatId} from "../store/actions/messageActions.js";
import {socket} from "../sockets/socket.js";
import {useDispatch} from "react-redux";

export const useMessageDelivered = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleDelivered = chatId => dispatch(get_messages_by_chatId(chatId));

        socket.on("new_message", ({chatId}) => handleDelivered(chatId));
        return () => {
            socket.off("new_message", ({chatId}) => handleDelivered(chatId));
        };
    }, [dispatch]);

    return null
}