import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import "./VoluntaryRegister.css";

const VoluntaryRegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const nome = form.nome.value;
        const idade = form.idade.value;
        const cpf = form.cpf.value;
        const email = form.email.value;
        const senha = form.senha.value;
        const senhaConfirmacao = form.senha_confirmacao.value;

        if (nome && cpf && idade && email && senha && senhaConfirmacao && senha === senhaConfirmacao) {
            setFirstInputsFilled(true);
        }
    };

    const handleFinalSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const cozinhar = form.cozinhar.checked;
        const musica = form.musica.checked;
        const reformas = form.reformas.checked;
        const medicina = form.medicina.checked;

        if ((cozinhar || musica || reformas || medicina)) {
            navigate("/autenticacaoDe2Fatores");
        }
    };

    const handleBack = () => {
        setFirstInputsFilled(false);
    };

    return (
<<<<<<< HEAD
        <>
            {showPasswordRecovery ? (
                <PasswordRecovery onClick={handleBackToLogin} />
            ) : (
                <div className="Register">
                    <SideBanner />
                    <section>
                        <img src={Logo} alt="" />
                        <h2>Login Voluntário</h2>
                        <form>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                name="senha"
                                required
                            />
                            <a href="/buscarONG">
                                <button type="button">Entrar</button>
                            </a>
                            <p onClick={handlePasswordRecovery}>Esqueceu a senha?</p>
                        </form>
                    </section>
                </div>
            )}
        </>
=======
        <div className="VoluntaryRegister">
            <section>
                {firstInputsFilled ? (
                    <form onSubmit={handleFinalSubmit}>
                        <h2>Crie sua conta!</h2>
                        <textarea name="descricao" placeholder="Fale um pouco sobre você" />
                        <input placeholder="Quais são as suas habilidades?" name="habilidades" type="text" />
                        <div className="Skills">
                            <span>
                                <label htmlFor="cozinhar">Cozinhar</label>
                                <input type="checkbox" name="cozinhar" />
                            </span>

                            <span>
                                <label htmlFor="musica">Música</label>
                                <input type="checkbox" name="musica" />
                            </span>

                            <span>
                                <label htmlFor="reformas">Reformas</label>
                                <input type="checkbox" name="reformas" />
                            </span>

                            <span>
                                <label htmlFor="medicina">Medicina</label>
                                <input type="checkbox" name="medicina" />
                            </span>
                        </div>
                        <div className="Buttons">
                            <button type="button" onClick={handleBack}>Voltar</button>
                            <button type="submit">Criar Conta</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>Crie sua conta!</h2>
                        <input type="text" placeholder="Nome completo" name="nome" required />
                        <input type="number" placeholder="Idade" name="idade" required />
                        <input type="text" placeholder="CPF" name="cpf" required />
                        <input type="text" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Senha" name="senha" required />
                        <input type="password" placeholder="Confirme sua senha" name="senha_confirmacao" required />
                        <div className="PictureContainer">
                            <h2>Foto</h2>
                        </div>
                        <div className="Buttons">
                            <button type="submit">Continuar</button>
                        </div>
                    </form>
                )}
            </section>
            <SideBanner />
        </div>
>>>>>>> Vini
    );
};

export default VoluntaryRegister;
