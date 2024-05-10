import React, { useState } from "react";
import PasswordRecovery from "./PasswordRecovery";

const Voluntary = () => {
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
                    <img src="https://img.freepik.com/fotos-premium/um-fundo-preto-com-um-fundo-branco-que-diz-nomade_662214-80304.jpg" alt="" />
                    <div className="login-area">
                        <img src="../img/logo.png" alt="" />
                        <h2 className="H22">Login Voluntário</h2>
                        <form className="title" onSubmit={handleLogin}>
                            <div className="container">
                                <input
                                    type="text"
                                    placeholder="E-mail"
                                    name="user"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Código"
                                    name="psw"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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

export default Voluntary;
