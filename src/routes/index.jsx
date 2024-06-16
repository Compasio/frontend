import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage'
import NotFound from '../pages/NotFound/NotFound'
import FirstPageNGO from '../pages/FindNGO/FirstPage/FirstPage'
import SecondPageNGO from '../pages/FindNGO/SecondPage/SecondPage'
import FirstPageVoluntary from '../pages/FindVoluntary/FirstPage/FirstPage'
import SecondPageVoluntary from '../pages/FindVoluntary/SecondPage/SecondPage'
import Adm from '../pages/Login/Adm';
import NGO from '../pages/Login/NGO';
import Voluntary from '../pages/Login/Voluntary';
import FirstPageOng from '../pages/OngPerfil/OngPages/FirtsPage';
import OngPerfilTrue from '../pages/OngPerfilTrue/OngPerfilTrue';
import VoluntaryProfile from '../pages/VoluntaryProfile/VoluntaryProfile';
import Project from '../pages/Project/Project';
import VoluntaryRegister from '../pages/Register/VoluntaryRegister';
import NGORegister from '../pages/Register/NGORegister';
import TwoFactorAuthentication from '../pages/Register/TwoFactorAuthentication';
import Donation from '../pages/Donation/Donation';

export default function WebRoutes() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/buscarONG" element={<FirstPageNGO />} />
                        <Route path="/ONG" element={<SecondPageNGO />} />
                        <Route path="/buscarVoluntario" element={<FirstPageVoluntary />} />
                        <Route path="/voluntario" element={<SecondPageVoluntary />} />
                        <Route path="/loginAdm" element={<Adm />} />
                        <Route path="/loginONG" element={<NGO />} />
                        <Route path="/loginVoluntario" element={<Voluntary />} />
                        <Route path="/perfilVoluntario" element={<VoluntaryProfile />} />
                        <Route path="/projetos" element={<Project />} />
                        <Route path="/criarONG" element={<NGORegister />} />
                        <Route path="/criarVoluntario" element={<VoluntaryRegister />} />
                        <Route path="/autenticacaoDe2Fatores" element={<TwoFactorAuthentication />} />
                        <Route path='doacao' element={<Donation />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path='/ongPerfil' element={ <FirstPageOng/> } />
                        <Route path='/ongPerfil1' element={ <OngPerfilTrue />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}