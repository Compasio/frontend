import React, { useState } from "react";
import PasswordRecovery from "./PasswordRecovery";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
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
        <div>

            {showPasswordRecovery ? (
                <PasswordRecovery handleBack={handleBackToLogin} />
            ) : (
                <div className="login-page">
                    <SideBanner />
                    <div className="login-area">
                        <img src="../img/logo.png" alt="" />
                        <h2 className="H22">Login ONG</h2>
                        <form>
                            <div className="container">
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
                                <div className="btn-area">
                                    <button type="submit">Entrar</button>
                                    <a type="button" className="esquecercod" onClick={handlePasswordRecovery}>Esqueceu a senha?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NGO;
