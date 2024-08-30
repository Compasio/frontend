import React, { useState } from "react";
import axios from "axios";
import PasswordRecovery from "./PasswordRecovery";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logosemnome.svg";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Voluntary = () => {
    const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handlePasswordRecovery = () => {
        setShowPasswordRecovery(true);
    };

    const handleBackToLogin = () => {
        setShowPasswordRecovery(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/auth/loginUser', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            navigate("/buscarONG")

        } catch (err) {
            setError('Erro de login. Verifique suas credenciais.');
        }
    };

    return (
        <>
            {showPasswordRecovery ? (
                <PasswordRecovery onClick={handleBackToLogin} />
            ) : (
                <div className="Login">
                    <SideBanner />
                    <section>
                        <img src={Logo} alt="" />
                        <h2>Login Voluntário</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                name="senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Entrar</button>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <p onClick={handlePasswordRecovery}>Esqueceu a senha?</p>
                        </form>
                    </section>
                </div>
            )}
        </>
    );
};

export default Voluntary;
