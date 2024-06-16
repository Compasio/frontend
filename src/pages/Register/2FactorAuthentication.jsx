import React from "react";
import "./TwoFactorAuthentication.css";
import Logo from "../../img/logocomnome.svg"

const TwoFactorAuthentication = () => {

  return (
    <div className="TwoFactorAuthentication">
      <header>
        <nav>
          <img src={Logo} alt="" />
          <a href="/loginVoluntario">
            <span class="material-symbols-outlined">
              arrow_back
            </span>
          </a>
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

export default TwoFactorAuthentication;