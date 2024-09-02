import React, { useState } from "react";
import "./PasswordRecovery.css";
import Logo from "../../img/logocomnome.svg";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const PasswordRecovery = () => {
  const [step, setStep] = useState("request"); // Usar "request" para solicitar o código
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get("type");

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await axios.post("https://backend-production-ff4c.up.railway.app/auth/passwordRecovery", { email });
      console.log("Response from server:", response.data);
      setStep("verify"); 
    } catch (error) {
      console.error("Erro ao solicitar o código:", error);
      setError("Erro ao solicitar o código. Verifique o e-mail e tente novamente.");
    }
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post("https://backend-production-ff4c.up.railway.app/auth/resetPassword", { email, password, code });
      console.log("Response from server:", response.data);

      if (userType === "voluntario") {
        navigate("/loginVoluntario");
      } else if (userType === "ong") {
        navigate("/loginONG");
      } else {
        setError("Tipo de usuário inválido. Não foi possível redirecionar.");
      }
    } catch (error) {
      console.error("Erro ao redefinir a senha:", error);
      setError("Erro ao redefinir a senha. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="PasswordRecovery">
      <header>
        <nav>
          <img src={Logo} alt="Logo" />
          <a href="/loginVoluntario">
            <span className="material-symbols-outlined">arrow_back</span>
          </a>
        </nav>
      </header>
      <main>
        {step === "request" && (
          <>
            <h1>Recuperação de Senha</h1>
            <p>Para recuperar a sua senha, digite seu e-mail cadastrado no campo abaixo.</p>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Seu e-mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Enviar Código</button>
              {error && <p className="error">{error}</p>}
            </form>
          </>
        )}

        {step === "verify" && (
          <>
            <h1>Verificação do Código</h1>
            <p>Digite o código enviado para o seu e-mail.</p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="text"
                placeholder="Código"
                name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Nova Senha"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirme a Nova Senha"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit">Redefinir Senha</button>
              {error && <p className="error">{error}</p>}
            </form>
          </>
        )}
      </main>
    </div>
  );
};

export default PasswordRecovery;
