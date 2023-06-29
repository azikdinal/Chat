import {useSelector} from "react-redux";
import Chat from "../atoms/Chat.jsx";
import {useChatDelivered} from "../../hooks/useChatDelivered.js";

const Chats = () => {

    const chats = useSelector(state => state.chat.chats)

    useChatDelivered()

    return (
        <div className="chats">
            {chats.map((chat, index) => <Chat chatId={chat.id} key={chat.id}/>)}
        </div>
    );
};

export default Chats;
