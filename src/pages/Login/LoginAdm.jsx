import React from "react";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";

const LoginAdm = () => {
    return (
        <div className="Body">
            <div className="Login">
                <SideBanner />
                <div className="login-area">
                    <img src="../img/logo.png" className="logoo" alt="" />
                    <h2 className="H22">Login Administrador</h2>
                    <form>
                        <div className="container">
                            <input
                                type="text"
                                placeholder="Usuário"
                                name="usuario"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Código"
                                name="codigo"
                                required
                            />
                            <div className="btn-area">
                                <button type="submit">Entrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginAdm;
