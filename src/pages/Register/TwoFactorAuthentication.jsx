import React from "react";
import "./TwoFactorAuthentication.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/logocomnome.svg"

const TwoFactorAuthentication = () => {
  const navigate = useNavigate();

  const handleCodeSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form) {
      navigate("/buscarOng");
    }
  };


  return (
    <div className="TwoFactorAuthentication">
      <header>
        <nav>
          <img src={Logo} alt="" />
          <a href="/criarVoluntario">
            <span class="material-symbols-outlined">
              arrow_back
            </span>
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
            name="codigo"
            required
          />
        </form>
      </main>
    </div>
  );
};

export default TwoFactorAuthentication;
