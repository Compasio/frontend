import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedUserType }) => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');
    const canNavigate = localStorage.getItem('canNavigate') === 'true';

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (userType !== allowedUserType || !canNavigate) {
        alert("Função não autorizada");
        return <Navigate to="/unauthorized" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;