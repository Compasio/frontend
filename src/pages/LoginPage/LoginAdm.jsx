import React, { useState } from "react";
import './LoginAdm.css';
import EsqueceuASenha from "./esqueceuasenha";

const LoginAdm = () => {
  const [UID, setUID] = useState("");
  const [code, setCode] = useState("");
  const [showRecuperarCodigo, setShowRecuperarCodigo] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (UID === "1" && code === "123") {
      alert(`Login bem-sucedido, bem-vindo de volta adm ${UID}! Redirecionando para a página...`);
    } else {
      alert("UID ou código incorreto. Tente novamente.");
    }
  };

  const handleRecuperarCodigo = () => {
    setShowRecuperarCodigo(true);
  };

  const handleBackToLogin = () => {
    setShowRecuperarCodigo(false);
  };

  const handleEnviarCodigo = () => {
    alert("Código de recuperação enviado para o seu e-mail!");
  };

  return (
    <div className="login-page">
      <br />
      <div className="button-container">
      </div>
      <h2 className="H22">Administrador</h2>
      {showRecuperarCodigo ? (
        <EsqueceuASenha handleBack={handleBackToLogin} handleEnviarCodigo={handleEnviarCodigo} /> // Passando a função handleEnviarCodigo como prop
      ) : (
        <form className="title" onSubmit={handleSubmit}>

          <div className="container">
            <label htmlFor="user"><b>UID</b></label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="ID aqui"
              name="user"
              value={UID}
              onChange={(e) => setUID(e.target.value)}
              required
            />

            <label htmlFor="psw"><b>Code</b></label>
            <input
              type="password"
              placeholder="Código aqui"
              name="psw"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>

          </div>

          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            <button type="button" className="voltar" onClick={handleRecuperarCodigo}>Não recebeu o código?</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginAdm;
