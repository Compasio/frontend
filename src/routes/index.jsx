import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProtectedFunction from '../auth';
import LandingPage from '../pages/LandingPage/LandingPage'
import NotFound from '../pages/NotFound/NotFound'
import FirstPageNGO from '../pages/FindNGO/FirstPage'
import SecondPageNGO from '../pages/FindNGO/SecondPage'
import FirstPageVoluntary from '../pages/FindVoluntary/FirstPage'
import SecondPageVoluntary from '../pages/FindVoluntary/SecondPage'
import Adm from '../pages/Login/Adm';
import NGO from '../pages/Login/NGO';
import Voluntary from '../pages/Login/Voluntary';
import FirstPageNGOProfile from '../pages/NGOProfile/FirstPage';
import SecondPageNGOProfile from '../pages/NGOProfile/SecondPage';
import VoluntaryProfile from '../pages/VoluntaryProfile/VoluntaryProfile';
import Project from '../pages/Project/Project';
import VoluntaryRegister from '../pages/Register/VoluntaryRegister';
import PasswordRecovery from '../pages/Login/PasswordRecovery';
import NGORegister from '../pages/Register/NGORegister';
import TwoFactorAuthentication from '../pages/Register/TwoFactorAuthentication';
import Maps from '../pages/Maps/Maps';
import Donation from '../pages/Donation/Donation';

export default function WebRoutes() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />

                        <Route path="/recuperarSenha" element={<PasswordRecovery />} />

                        <Route path="/buscarONG" element={<FirstPageNGO />} />

                        <Route path="/ONG/:id" element={<SecondPageNGO />} />

                        <Route path="/buscarVoluntario" element={<FirstPageVoluntary />} />

                        <Route path="/voluntario" element={<SecondPageVoluntary />} />

                        <Route path="/loginAdm" element={<Adm />} />

                        <Route path="/loginONG" element={<NGO />} />

                        <Route path="/loginVoluntario" element={<Voluntary />} />

                        <Route path="/perfilVoluntario/:id" element={<VoluntaryProfile />} />

                        <Route path="/projetos" element={<Project />} />

                        <Route path="/criarONG" element={<NGORegister />} />

                        <Route path="/maps" element={<Maps />} />

                        <Route path="/criarVoluntario" element={<VoluntaryRegister />} />

                        <Route path="/autenticacaoDe2Fatores" element={<TwoFactorAuthentication />} />

                        <Route path='doacao' element={<Donation />} />

                        <Route path="*" element={<NotFound />} />

                        <Route path='/perfilONG/:id' element={<FirstPageNGOProfile />} />

                        <Route path='/perfilONG2' element={<SecondPageNGOProfile />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}