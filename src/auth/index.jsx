import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedFunction = ({ allowedUserType }) => {
    const token = Cookies.get('token');
    const userType = Cookies.get('userType');
    const canNavigate = Cookies.get('canNavigate') === 'true';

    if (!token) {
        if (userType === 'Voluntary') {
            return <Navigate to="/loginVoluntario" />;
        }
        else if (userType === 'NGO') {
            return <Navigate to="/loginONG" />;
        }
        else {
            return <Navigate to='/LandingPage' />
        }
    }

    if (userType !== allowedUserType || !canNavigate) {
        alert('Função não autorizada');
        return <Navigate to="/NotFound" />
    }

    return <Outlet />;
};

export default ProtectedFunction;
