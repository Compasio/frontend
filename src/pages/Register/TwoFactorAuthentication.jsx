import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TwoFactorAuthentication.css";
import Logo from "../../img/logocomnome.svg";

const TwoFactorAuthentication = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCodeSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await axios.post("https://backend-production-ff4c.up.railway.app/auth/verifyUserCreation", { code });
        navigate("/login");
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