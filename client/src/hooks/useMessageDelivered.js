import {useEffect} from "react";
import {get_message_by_id} from "../store/actions/messageActions.js";
import {socket} from "../sockets/socket.js";
import {useDispatch} from "react-redux";

export const useMessageDelivered = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleDelivered = messageId => {
            console.log(messageId)
            // dispatch(get_message_by_id(messageId))
        };

        socket.on("new_message", ({messageId}) => {
            handleDelivered(messageId)
        });
        return () => {
            socket.off("new_message", ({messageId}) => handleDelivered(messageId));
        };
    }, [dispatch]);

    return null
}