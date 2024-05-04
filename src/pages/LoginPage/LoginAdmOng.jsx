import React, { useState } from "react";
import EsqueceuASenha from "./esqueceuasenha";

const LoginAdmOng = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showEsqueceuASenha, setShowEsqueceuASenha] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "ONG" && password === "123") {
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
        <div className="login-page">
            <br />
            <h2 className="H22">Login Administrador da ONG</h2>
            {showEsqueceuASenha ? (
                <EsqueceuASenha handleBack={handleBackToLogin} />
            ) : (
                <form className="title" onSubmit={handleLogin}>
                    <div className="container">
                        <label htmlFor="user"><b>Nome de Usuário</b></label>
                        <input
                            type="text"
                            placeholder="Nome de usuário aqui"
                            name="user"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <label htmlFor="psw"><b>Senha</b></label>
                        <input
                            type="password"
                            placeholder="Senha aqui"
                            name="psw"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>
                            <input
                                type="checkbox"
                                name="remember"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            /> Lembrar-me?
                        </label>
                        <button type="submit">Entrar</button>
                        <button type="button" className="voltar" onClick={handleEsqueceuASenha}>Esqueceu a senha?</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoginAdmOng;
