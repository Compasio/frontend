import React, { useState } from "react";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logosemnome.svg"
import "./NGORegister.css"

const NGORegister = () => {
    const [showTwoFactorAuthentication, setShowTwoFactorAuthentication] = useState(false);

    const handleTwoFactorAuthentication = () => {
        setShowTwoFactorAuthentication(true);
    };

    const handleBackToLogin = () => {
        setShowTwoFactorAuthentication(false);
    };

    return (
        <div className="Body">
            {showTwoFactorAuthentication ? (
                <TwoFactorAuthentication handleBack={handleBackToLogin} />
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
                            <p onClick={handleTwoFactorAuthentication}>Esqueceu a senha?</p>
                        </form>
                    </section>
                </div>
            )}
        </div>
    );
};

export default NGORegister;
