import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logosemnome.svg";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordRecovery = () => {
    navigate("/recuperarSenha");
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
        const token = response.data;
        const decodedToken = jwtDecode(token);
        const decodedUserType = decodedToken.userType;
        console.log(decodedToken)

        Cookies.set("token", token, { expires: 7 });
        Cookies.set("userType", decodedUserType, { expires: 7 });

        if (decodedUserType === "ong") {
          navigate("/buscarVoluntario");
        } else if (decodedUserType === "voluntary") {
          navigate("/buscarONG");
        } else {
          setError("Tipo de usuário desconhecido.");
        }
      } else {
        setError("Erro de login. Verifique suas credenciais.");
      }
    } catch (err) {
      console.error("Erro de login:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Erro de login. Verifique suas credenciais.");
      }
    }
  };

  return (
    <div className="Login">
      <SideBanner />
      <section>
        <img src={Logo} alt="" />
        <h2>Login</h2>
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

export default Login;
