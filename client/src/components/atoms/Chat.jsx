import {useDispatch} from "react-redux";
import {get_messages_by_chatId} from "../../store/actions/messageActions.js";

const Chat = ({chatId}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        // dispatch(set_chat_id(chatId))
        dispatch(get_messages_by_chatId(chatId))
    }

    return (
        <div className="userChat" onClick={handleClick}>
            <div className="userChatInfo">
                <img src="/img/avatar.png" alt="user"/>
                <div className="userChatInfo-box">
                    <div className="userChatInfo-name">Max</div>
                    <div className="userChatInfo-message">
                        <span>Max</span> <p>some message</p>
                    </div>
                </div>
            </div>
            <div className="userChatInfo-data">
                <span>{chatId}</span>
            </div>
        </div>
    );
};

export default Chat;