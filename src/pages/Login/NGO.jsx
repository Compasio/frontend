import React, { useState } from "react";
import axios from "axios";
import PasswordRecovery from "./PasswordRecovery";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logosemnome.svg";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const NGO = () => {
    const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlePasswordRecovery = () => {
        setShowPasswordRecovery(true);
    };

    const handleBackToLogin = () => {
        setShowPasswordRecovery(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://backend-production-ff4c.up.railway.app/api/auth/loginUser', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userType', 'ONG');
            navigate("/buscarVoluntario");
        } catch (err) {
            setError('Erro de login. Verifique suas credenciais.');
        }
    };

    return (
        <>
            {showPasswordRecovery ? (
                <PasswordRecovery userType="NGO" handleBack={handleBackToLogin} />
            ) : (
                <div className="Login">
                    <SideBanner />
                    <section>
                        <img src={Logo} alt="" />
                        <h2>Login ONG</h2>
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

export default NGO;