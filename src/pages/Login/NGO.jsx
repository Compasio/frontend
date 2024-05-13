import React, { useState } from "react";
import PasswordRecovery from "./PasswordRecovery";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logosemnome.svg"
import "./Login.css"

const NGO = () => {
    const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);

    const handlePasswordRecovery = () => {
        setShowPasswordRecovery(true);
    };

    const handleBackToLogin = () => {
        setShowPasswordRecovery(false);
    };

    return (
        <div className="Body">
            {showPasswordRecovery ? (
                <PasswordRecovery handleBack={handleBackToLogin} />
            ) : (
                <div className="Login">
                    <SideBanner />
                    <section>
                            <img src={Logo} alt="" />
                            <h2>Login ONG</h2>
                        <form>
                            <input
                                type="text"
                                placeholder="Organização"
                                name="organizacao"
                                required
                            />
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
                            <button type="submit">Entrar</button>
                            <p onClick={handlePasswordRecovery}>Esqueceu a senha?</p>
                        </form>
                    </section>
                </div>
            )}
        </div>
    );
};

export default NGO;
