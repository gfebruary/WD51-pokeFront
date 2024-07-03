import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from "../utils/logInOut";

const Logout = ({ setUser }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log('Logging out');
        logout(setUser);
        navigate('/', { replace: true });
    }, [navigate, setUser]);

    return (
        <h1>Logout</h1>
    );
}

export default Logout;