import React, { useState } from "react";
import './Login.css';
import HeaderPage from "./Headerpage";

const EsqueceuASenha = ({ handleBack }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Um e-mail de redefinição de senha foi enviado para ${email}`);
  };

  return (
    <div className="page">
      <HeaderPage />
      <div className="recovery-page">
        <br />
        <h2 className="H22">Esqueceu a senha?</h2>
        <p>Para recuperar a sua senha, digite seu e-mail cadastrado no campo abaixo.</p>
        <form className="title" onSubmit={handleSubmit}>

          <div className="container">
            <input
              type="email"
              placeholder="Digite aqui..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <a type="submit"><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt="" /></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EsqueceuASenha;
