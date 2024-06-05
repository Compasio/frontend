import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import "./NGORegister.css";

const NGORegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const nome = form.nome.value;
        const cnpj = form.cnpj.value;
        const email = form.email.value;
        const senha = form.senha.value;
        const senhaConfirmacao = form.senha_confirmacao.value;

        if (nome && cnpj && email && senha && senhaConfirmacao && senha === senhaConfirmacao) {
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
                <PasswordRecovery handleBack={handleBackToLogin} />
            ) : (
                <div className="Register">
                    <SideBanner />
                    <section>
                        <img src={Logo} alt="" />
                        <h2>Login ONG</h2>
                        <form>
                            <input
                                type="text"
                                placeholder="Organização"
                                name="organizacao"
                                required
                            />
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
                            <button type="submit">Entrar</button>
                            <p onClick={handlePasswordRecovery}>Esqueceu a senha?</p>
                        </form>
                    </section>
                </div>
            )}
        </>
=======
        <div className="NGORegister">
            <section>
                {firstInputsFilled ? (
                    <form onSubmit={handleFinalSubmit}>
                        <h2>Crie sua Organização!</h2>
                        <textarea name="descricao" placeholder="Escreva sobre sua ONG" />
                        <input placeholder="Quais são as funções da sua ONG?" name="habilidades" type="text" />
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
                        <h2>Crie sua Organização!</h2>
                        <input type="text" placeholder="Nome da ong" name="nome" required />
                        <input type="text" placeholder="Email" name="email" required />
                        <input type="text" placeholder="cnpj" name="cnpj" required />
                        <input type="password" placeholder="Senha" name="senha" required />
                        <input type="password" placeholder="Confirme sua senha" name="senha_confirmacao" required />

                        <div className="Certificates">
                            <label htmlFor="certificate1">Enviar arquivo</label>
                            <input type="file" name="certificate1" />
                            <span class="material-symbols-outlined">
                                folder_open
                            </span>

                            <label htmlFor="certificate2">Enviar arquivo</label>
                            <input type="file" name="certificate2" />
                            <span class="material-symbols-outlined">
                                folder_open
                            </span>

                            <label htmlFor="certificate3">Enviar arquivo</label>
                            <input type="file" name="certificate3" />
                            <span class="material-symbols-outlined">
                                folder_open
                            </span>
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

export default NGORegister;
