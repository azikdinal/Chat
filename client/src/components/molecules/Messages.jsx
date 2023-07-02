import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {useMessageDelivered} from "../../hooks/useMessageDelivered.js";
import Message from "../atoms/Message.jsx";

const Messages = () => {
    const containerRef = useRef(null);
    const {messages} = useSelector(state => state.message)

    useMessageDelivered()


    useEffect(() => {
        const container = containerRef.current;
        container.scrollTo(0, container.scrollHeight);
    }, [messages]);


    return (
        <div className="messages" ref={containerRef}>
            {messages.map((message, index) => (
                <Message key={index} isUser={message.isUser}>{message.text}</Message>
            ))}
        </div>
    );
};

export default Messages