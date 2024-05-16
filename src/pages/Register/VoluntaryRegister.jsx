import React, { useState } from "react";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import "./VoluntaryRegister.css"

const VoluntaryRegister = () => {
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
                <TwoFactorAuthentication onClick={handleBackToLogin} />
            ) : (
                <div className="VoluntaryRegister">
                    <section>
                        <form>
                            <h2>Crie sua conta!</h2>
                            <input
                                type="text"
                                placeholder="Nome completo"
                                name="nome"
                                required
                            />
                            <input
                                type="text"
                                placeholder="CPF"
                                name="cpf"
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
                            <input
                                type="password"
                                placeholder="Confirme sua senha"
                                name="senha_confirmacao"
                                required
                            />
                            <a href="/buscarONG">
                                <button type="button">Continuar</button>
                            </a>
                        </form>
                    </section>
                    <SideBanner />
                </div>
            )}
        </div>

    );
};

export default VoluntaryRegister;
