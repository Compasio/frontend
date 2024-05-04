import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAdmOng from "./pages/LoginPage/LoginAdmOng";
import LoginAdm from "./pages/LoginPage/LoginAdm";
import LoginVoluntario from "./pages/LoginPage/LoginVoluntario";
import LoginONG from "./pages/LoginPage/LoginOng";
import WebRoutes from "./routes/index";

function App() {
  return (
    <div className="App">
      {/* <webroutes> */}
      <h1>IMPORTE A SUA PÁGINA E A COLOQUE AQUI</h1>
      <Router>
        <Routes>
          <Route path="/loginAdmOng" element={<LoginAdmOng />} />
          <Route path="/loginAdm" element={<LoginAdm />} />
          <Route path="/loginONG" element={<LoginONG/>}/>
          <Route path="/loginVoluntario" element={<LoginVoluntario/>}/>
          <Route path="/" element={<WebRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
