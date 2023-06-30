import {useSelector} from "react-redux";
import ChatNavbar from "../atoms/ChatNavbar.jsx";
import Messages from "../molecules/Messages.jsx";
import Input from "../atoms/Input.jsx";

const ChatWindow = () => {
    let chatId = useSelector(state => state.message.chatId)

    return (<div className="chat">
        <ChatNavbar/>
        <Messages/>
        <Input/>
    </div>)
    // switch (21) {
    //     case 21:
    //
    //     default:
    //         return (<div>sad</div>)
    // }
};

export default ChatWindow;
