import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage'
import NotFound from '../pages/NotFound/NotFound'
import FirstPageNGO from '../pages/FindNGO/FirstPage/FirstPage'
import SecondPageNGO from '../pages/FindNGO/SecondPage/SecondPage'
import FirstPageVoluntary from '../pages/FindVoluntary/FirstPage/FirstPage'
import SecondPageVoluntary from '../pages/FindVoluntary/SecondPage/SecondPage'
import NGO from '../pages/Login/NGO';
import Adm from '../pages/Login/Adm';
import NGOAdm from '../pages/Login/NGOAdm';
import Voluntary from '../pages/Login/Voluntary';

function WebRoutes() {
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
                        <Route path="*" element={<NotFound />} />
                        <Route path="/loginONG" element={<NGO />} />
                        <Route path="/loginAdm" element={<Adm />} />
                        <Route path="/loginAdmONG" element={<NGOAdm />} />
                        <Route path="/loginVoluntario" element={<Voluntary />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default WebRoutes;
