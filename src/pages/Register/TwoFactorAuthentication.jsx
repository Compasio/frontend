import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./TwoFactorAuthentication.css";
import Logo from "../../img/logocomnome.svg";

const TwoFactorAuthentication = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const tipo = queryParams.get("tipo");

  const handleCodeSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await axios.post("https://backend-production-ff4c.up.railway.app/auth/verifyUserCreation", { code });

      console.log("Response from server:", response.data);

      if (tipo === "voluntario") {
        navigate("/loginVoluntario");
      } else if (tipo === "ong") {
        navigate("/loginONG");
      }

    } catch (error) {
      console.error("Erro ao verificar o código:", error);
      setError("Erro ao verificar o código. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="TwoFactorAuthentication">
      <header>
        <nav>
          <img src={Logo} alt="Logo" />
          <a href="/criarVoluntario">
            <span className="material-symbols-outlined">arrow_back</span>
          </a>
        </nav>
      </header>
      <main>
        <h1>Autenticação de Dois Fatores</h1>
        <p>Digite no campo abaixo o código que foi enviado ao seu E-MAIL de cadastro:</p>
        <form onSubmit={handleCodeSubmit}>
          <input
            type="text"
            placeholder="Código"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <button type="submit">Verificar Código</button>
        </form>
        {error && <p className="error">{error}</p>}
      </main>
    </div>
  );
};

export default TwoFactorAuthentication;