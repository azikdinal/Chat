import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {sign_in_by_token} from './store/actions/userActions';
import Home from './Pages/Home';
import SignPage from './Pages/SignPage';

const App = () => {
    const {isAuth} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(sign_in_by_token(token));
        }
    }, [dispatch]);

    return isAuth ? <Home /> : <SignPage />;
};

export default App;
