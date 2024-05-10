import React from "react";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logo.png"
import "./Login.css"

const Adm = () => {

    return (
        <div className="Body">
            <div className="Login">
                <SideBanner />
                <section>
                    <span>
                        <img src={Logo} alt="" />
                        <h2>Login ONG</h2>
                    </span>
                    <form>
                        <input
                            type="text"
                            placeholder="Usuário"
                            name="usuario"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Código"
                            name="codigo"
                            required
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Adm;
