import React, { useState } from "react";
import './Login.css';
import EsqueceuASenha from "./esqueceuasenha";

const LoginVoluntario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showEsqueceuASenha, setShowEsqueceuASenha] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "voluntario" && password === "123") {
      alert(`Login bem-sucedido, Bem-vindo ${username}! Redirecionando para a página...`);
    } else {
      alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
  };

  const handleEsqueceuASenha = () => {
    setShowEsqueceuASenha(true);
  };

  const handleBackToLogin = () => {
    setShowEsqueceuASenha(false);
  };

  return (
    <div className="login-page">
      <br />
      <h2 className="H22">Login Voluntário</h2>
      {showEsqueceuASenha ? (
        <EsqueceuASenha handleBack={handleBackToLogin} />
      ) : (
        <form className="title" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="user"><b>Nome de Usuário</b></label>
            <input
              type="text"
              placeholder="Nome de usuário aqui"
              name="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="psw"><b>Senha</b></label>
            <input
              type="password"
              placeholder="Senha aqui"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent:'space-between' }}>
              <label>
                
                <input
                  type="checkbox"
                  name="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                /> 
                Lembrar-me?
              </label>
              
              <span className="psw" onClick={handleEsqueceuASenha} style={{ textDecoration: 'underline' }}>Esqueceu a senha?</span>              
            </div>

            <button type="submit">Entrar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginVoluntario;
