import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage'
import NotFound from '../pages/NotFound/NotFound'
import FirstPageNGO from '../pages/FindNGO/FirstPage/FirstPage'
import SecondPageNGO from '../pages/FindNGO/SecondPage/SecondPage'
import NGO from '../pages/Login/NGO';
import LoginAdm from '../pages/Login/LoginAdm';
import LoginAdmOng from '../pages/Login/LoginAdmOng';
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
                        <Route path="*" element={<NotFound />} />
                        <Route path="/NGO" element={<NGO />} />
                        <Route path="/LoginAdm" element={<LoginAdm />} />
                        <Route path="/LoginAdmOng" element={<LoginAdmOng />} />
                        <Route path="/Voluntary" element={<Voluntary />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default WebRoutes;
