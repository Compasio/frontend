import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProtectedFunction from '../auth';
import LandingPage from '../pages/LandingPage/LandingPage'
import NotFound from '../pages/NotFound/NotFound'
// import Adm from '../pages/Login/Adm';
import Search from '../pages/Search/Search';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Project from '../pages/Project/Project';
import VoluntaryRegister from '../pages/Register/VoluntaryRegister';
import PasswordRecovery from '../pages/Login/PasswordRecovery';
import NGORegister from '../pages/Register/NGORegister';
import TwoFactorAuthentication from '../pages/Register/TwoFactorAuthentication';
import Maps from '../pages/Maps/Maps';
import Donation from '../pages/Donation/Donation';
import APIPage from '../pages/APIPage/APIPage';

export default function WebRoutes() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />

                        <Route path="/recuperarSenha" element={<PasswordRecovery />} />

                        <Route path="/busca" element={<Search />} />

                        {/* <Route path="/loginAdm" element={<Adm />} /> */}

                        <Route path="/login" element={<Login />} />

                        {/* <Route path="/perfilVoluntario/:id" element={<VoluntaryProfile />} /> */}

                        <Route path="/perfil/:id" element={<Profile />} />

                        <Route path="/projetos" element={<Project />} />

                        <Route path="/criarONG" element={<NGORegister />} />

                        <Route path="/maps" element={<Maps />} />

                        <Route path="/criarVoluntario" element={<VoluntaryRegister />} />

                        <Route path="/autenticacaoDe2Fatores" element={<TwoFactorAuthentication />} />

                        <Route path='doacao' element={<Donation />} />

                        <Route path="*" element={<NotFound />} />

                        {/* <Route path='/perfilONG/:id' element={<FirstPageNGOProfile />} />

                        <Route path='/perfilONG2' element={<SecondPageNGOProfile />} /> */}

                        <Route path='/api' element={<APIPage />}/>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}