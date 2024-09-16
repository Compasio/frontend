import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import Logo from "../../img/logosemnome.svg";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handlePasswordRecovery = () => {
    navigate("/recuperarSenha");
  };

  const landingPage = () => {
    navigate("/");
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

        Cookies.set("token", token, { expires: 7 });
        Cookies.set("userType", decodedUserType, { expires: 7 });
        navigate("/busca");
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
        <img src={Logo} alt="Logo" />
        <h2>Login</h2>
        {message && (
          <p
            style={{
              color: "red",
              opacity: showMessage ? 1 : 0,
              transition: "opacity 0.4s ease-in-out",
            }}
          >
            {message}
          </p>
        )}
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
          <p onClick={landingPage} style={{ cursor: "pointer" }}>
            Não possui conta?
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
