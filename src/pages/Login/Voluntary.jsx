import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logosemnome.svg";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Voluntary = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlePasswordRecovery = () => {
        navigate('/recuperarSenha');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://backend-production-ff4c.up.railway.app/auth/loginUser",
                {
                    email,
                    password,
                }
            );

            if (response.data) {
                const token  = response.data;
                Cookies.set("token", token, { expires: 7 });
                Cookies.set("userType", "Voluntary", { expires: 7 });
                navigate("/buscarONG");
            } else {
                setError("Erro de login. Verifique suas credenciais.");
            }
        } catch (err) {
            console.error("Erro de login:", err);
            setError("Erro de login. Verifique suas credenciais.");
        }
    };

    return (
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
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <p onClick={handlePasswordRecovery} style={{ cursor: "pointer" }}>
                        Esqueceu a senha?
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Voluntary;
