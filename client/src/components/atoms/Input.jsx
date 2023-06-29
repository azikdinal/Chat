import {useState} from "react";
import {sendMessage} from "../../store/functions/message.js";
const Input = () => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleClick = () => {
            sendMessage(value)
            setValue('')
    }


    return (
        <div className="input">
            <input type="text" placeholder="Type a message" value={value} onChange={handleChange}/>
            <div className="send">
                {/*<input type="file" id="file"/>*/}
                {/*<label htmlFor="file">*/}
                {/*    <img src="" alt=""/>*/}
                {/*</label>*/}
                <button onClick={value ? handleClick : () => {}}>Send</button>
            </div>
        </div>
    );
};


export default (Input);
