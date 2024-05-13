import React, { useState } from "react";
import PasswordRecovery from "./PasswordRecovery";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logosemnome.svg"
import "./Login.css"

const VoluntaryRegister = () => {
    const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);

    const handlePasswordRecovery = () => {
        setShowPasswordRecovery(true);
    };

    const handleBackToLogin = () => {
        setShowPasswordRecovery(false);
    };

    return (
        <div>

            {showPasswordRecovery ? (
                <PasswordRecovery onClick={handleBackToLogin} />
            ) : (
                <div className="Login">
                    <SideBanner />
                    <section>
                        <img src={Logo} alt="" />
                        <h2>Login Voluntário</h2>
                        <form>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                name="senha"
                                required
                            />
                            <a href="/buscarONG">
                                <button type="button">Entrar</button>
                            </a>
                            <p onClick={handlePasswordRecovery}>Esqueceu a senha?</p>
                        </form>
                    </section>
                </div>
            )}
        </div>
    );
};

export default VoluntaryRegister;
