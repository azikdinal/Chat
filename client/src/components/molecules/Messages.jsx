import {useRef} from "react";
import {useSelector} from "react-redux";
import {useMessageDelivered} from "../../hooks/useMessageDelivered.js";
import Message from "../atoms/Message.jsx";

const Messages = ({chatId}) => {
    const containerRef = useRef(null);
    const messages = useSelector(state => state.message.messages)
    useMessageDelivered(chatId)


    // useEffect(() => {
    //     const container = containerRef.current;
    //     container.scrollTo(0, container.scrollHeight);
    // }, [dispatch]);


    return (
        <div className="messages" ref={containerRef}>
            {messages.map((message, index) => (
                <Message key={index} isUser={message.isUser}>{message.text}</Message>
            ))}
        </div>
    );
};

export default Messages