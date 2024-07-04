import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { redirect } from 'react-router-dom';

export const login = async (formData, srvUrl, setUser, setLoginError) => {

    try {
        const res = await axios.post(`${srvUrl}/fighters/login`, {
            email: formData.email,
            password: formData.password,
        });
        const token = res.data.token;
        if (!token) {
            throw new Error('No token in response');
        }
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return true;
    } catch (error) {
        console.error('Login error:', error);
        setLoginError(error.message);
        return false;
    }
};

export const logout = (setUser) => {
    localStorage.removeItem('token');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    redirect('/')
};
