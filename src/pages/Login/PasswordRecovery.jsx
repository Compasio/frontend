import React from "react";
import "./PasswordRecovery.css";
import Logo from "../../img/logocomnome.svg"

const PasswordRecovery = () => {

  return (
      <div className="PasswordRecovery">
        <header>
          <nav>
            <img src={Logo} alt="" />
            <span class="material-symbols-outlined">
              arrow_back
            </span>
          </nav>
        </header>
        <main>
          <h1>Esqueceu a senha?</h1>
          <p>Para recuperar a sua senha, digite seu e-mail cadastrado no campo abaixo.</p>
          <form>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <span class="material-symbols-outlined">
              send
            </span>
          </form>
        </main>
      </div>
  );
};

export default PasswordRecovery;
