import {useState} from "react";
import {useDispatch} from "react-redux";
import {sign_up} from "../store/actions/userActions.js";

const SignPage = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [userExist, setUserExist] = useState(false)

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    const handleClick = () => {
        setUserExist(!userExist)
    }
    const dispatch = useDispatch()

    const handleSign = () => {
        userExist
            ?
            dispatch(sign_up(emailValue, passwordValue))
            :
            dispatch(sign_up(emailValue, passwordValue))
    }


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Realtime Chat</span>
                <span className="title">{userExist
                    ?
                    "Login"
                    :
                    "Register"}</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" value={emailValue} onChange={handleEmailChange}/>
                    <input type="password" placeholder="password" value={passwordValue}
                           onChange={handlePasswordChange}/>
                    <button onClick={handleSign}>Sign in</button>
                    {/* {err && <span>Something went wrong</span>} */}
                </form>
                <p>
                    {userExist
                        ?
                        "Don't have"
                        :
                        "Have"} an account? <a className="switch" onClick={handleClick}>{userExist
                    ?
                    "Register"
                    :
                    "Login"}</a>
                </p>
            </div>
        </div>
    );
};

export default SignPage;