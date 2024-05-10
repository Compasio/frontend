import React from "react";

const LoginAdm = () => {
    return (
        <div className="Body">
            <div className="Login">
                <img src="https://img.freepik.com/fotos-premium/um-fundo-preto-com-um-fundo-branco-que-diz-nomade_662214-80304.jpg" alt="" />
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
