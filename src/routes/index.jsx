import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage'
import NotFound from '../pages/NotFound/NotFound'
import FirstPageNGO from '../pages/FindNGO/FirstPage/FirstPage'
import SecondPageNGO from '../pages/FindNGO/SecondPage/SecondPage'
import LoginOng from '../pages/LoginPages/LoginOng';
import LoginAdm from '../pages/LoginPages/LoginAdm';
import LoginAdmOng from '../pages/LoginPages/LoginAdmOng';
import LoginVoluntario from '../pages/LoginPages/LoginVoluntario';

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
                        <Route path="/LoginOng" element={<LoginOng />} />
                        <Route path="/LoginAdm" element={<LoginAdm />} />
                        <Route path="/LoginAdmOng" element={<LoginAdmOng />} />
                        <Route path="/LoginVoluntario" element={<LoginVoluntario />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default WebRoutes;
