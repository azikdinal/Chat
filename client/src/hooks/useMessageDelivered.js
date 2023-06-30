import {useEffect} from "react";
import {get_messages_by_chatId} from "../store/actions/messageActions.js";
import {socket} from "../sockets/socket.js";
import {useDispatch} from "react-redux";

export const useMessageDelivered = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleDelivered = () => dispatch(get_messages_by_chatId());

        socket.on("new_message", () => {
            console.log("new_message")

            handleDelivered()
        });
        return () => {
            socket.off("new_message", () => handleDelivered());
        };
    }, [dispatch]);

    return null
}