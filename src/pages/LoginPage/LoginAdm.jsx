import React, { useState } from "react";
import EsqueceuASenha from "./esqueceuasenha";

const LoginOng = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showEsqueceuASenha, setShowEsqueceuASenha] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "Adm" && password === "123") {
            alert(`Login bem-sucedido, Bem-vindo ${username}! Redirecionando para a página...`);
        } else {
            alert("Nome de usuário ou senha incorretos. Tente novamente.");
        }
    };

    const handleEsqueceuASenha = () => {
        setShowEsqueceuASenha(true);
    };

    const handleBackToLogin = () => {
        setShowEsqueceuASenha(false);
    };

    return (
        <div>

            {showEsqueceuASenha ? (
                <EsqueceuASenha handleBack={handleBackToLogin} />
            ) : (
                <div className="login-page">
                    <img src="https://img.freepik.com/fotos-premium/um-fundo-preto-com-um-fundo-branco-que-diz-nomade_662214-80304.jpg" alt="" />
                    <div className="login-area">
                        <img src="../img/logo.png" alt="" />
                        <h2 className="H22">Login Administrador</h2>
                        <form className="title" onSubmit={handleLogin}>
                            <div className="container">
                                <input
                                    type="text"
                                    placeholder="Usuário"
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
                                    <a type="button" className="esquecercod" onClick={handleEsqueceuASenha}>Esqueceu a senha?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginOng;
