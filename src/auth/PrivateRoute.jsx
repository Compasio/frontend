import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element }) => {
    const token = Cookies.get('token');

    if (!token) {
        return (
            <Navigate 
                to="/login" 
                state={{ message: 'Você não está logado!' }} 
            />
        );
    }

    return element;
};

export default PrivateRoute;
