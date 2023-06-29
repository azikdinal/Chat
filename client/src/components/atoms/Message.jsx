const Message = ({children, isUser}) => {
    return (
        isUser
            ?
            <div className="message" style={{flexDirection: "row-reverse"}}>
                <div className="messageInfo">
                    <span>just now</span>
                </div>
                <div className="messageContent">
                    {children}
                    <img alt=""/>
                </div>
            </div>
            :
            <div className="message">
                <div className="messageInfo">
                    <img src="/img/avatar.png" alt=""/>
                    <span>just now</span>
                </div>
                <div className="messageContent">
                    {children}
                    <img alt=""/>
                </div>
            </div>

    );
};
export default Message;
