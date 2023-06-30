const ChatNavbar = () => {


    const email = "Azamat"

    return (
        <>
            <div className="chatInfo">
                <div className="user">
                    <img src="/img/avatar.png" alt="user"/>
                    <div>
                        <span style={{color: "#ffffff"}}>{email}</span>
                        <div>last seen recently</div>
                    </div>
                </div>
                <div className="chatIcons">
                    <img src="/img/icons/search.svg" alt="search"/>
                    <img src="/img/icons/phone.svg" alt="phone"/>
                    <img src="/img/icons/more.svg" alt="more"/>
                </div>
            </div>
        </>
    );
};

export default ChatNavbar;