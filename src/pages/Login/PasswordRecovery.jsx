import React from "react";
import './Login.css';

const PasswordRecovery = () => {

  return (
    <div className="Body">
      <header className="header-page">
        <img className="logo" src="./img/logowname.png" alt="" />
        <a href="./LoginOng.jsx"><img src="./img/Back.png" alt="" /></a>
      </header>
      <div className="recovery-page">
        <br />
        <h2 className="H22">Esqueceu a senha?</h2>
        <p>Para recuperar a sua senha, digite seu e-mail cadastrado no campo abaixo.</p>
        <form>
          <input
            type="email"
            placeholder="Digite seu email"
            name="email"
            required
          />
          <a type="submit"><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt="" /></a>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
