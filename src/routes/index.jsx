import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import NotFound from '../pages/NotFound/NotFound';
import Search from '../pages/Search/Search';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import VoluntaryRegister from '../pages/Register/VoluntaryRegister';
import Maps from '../pages/Maps/Maps';
import PasswordRecovery from '../pages/Login/PasswordRecovery';
import NGORegister from '../pages/Register/NGORegister';
import TwoFactorAuthentication from '../pages/Register/TwoFactorAuthentication';
import PrivateRoute from '../auth/PrivateRoute';

export default function WebRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />

                    <Route path="/recuperarSenha" element={<PasswordRecovery />} />

                    <Route
                        path="/busca"
                        element={<PrivateRoute element={<Search />} />}
                    />

                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/perfil/:id"
                        element={<PrivateRoute element={<Profile />} />}
                    />

                    <Route
                        path="/maps"
                        element={<PrivateRoute element={<Maps />} />}
                    />

                    <Route path="/criarONG" element={<NGORegister />} />

                    <Route path="/criarVoluntario" element={<VoluntaryRegister />} />

                    <Route path="/autenticacaoDe2Fatores" element={<TwoFactorAuthentication />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}