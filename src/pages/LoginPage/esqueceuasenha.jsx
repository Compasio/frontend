import React, { useState } from "react";
import './Login.css';

const EsqueceuASenha = ({ handleBack }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Um e-mail de redefinição de senha foi enviado para ${email}`);
  };

  return (
    <div className="login-page">
      <br />
      <h2 className="H22">Esqueceu a senha?</h2>
      <form className="title" onSubmit={handleSubmit}>

        <div className="container">
          <label htmlFor="email"><b>Endereço de E-mail</b></label>
          <input
            type="email"
            placeholder="E-mail registrado aqui"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Enviar e-mail de redefinição</button>
          <button type="button" className="voltar" onClick={handleBack}>Voltar</button>
        </div>

      </form>
    </div>
  );
};

export default EsqueceuASenha;
