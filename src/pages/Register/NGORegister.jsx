import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import axios from "axios";
import "./NGORegister.css";

const NGORegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const [ngoDetails, setNgoDetails] = useState({});
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get('http://localhost:9000/sys/getOngThemes')
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.error("Houve um erro ao buscar habilidades: ", error);
    //         });
    // }, []);

    // nome - nome - caixa - rota

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const ong_name = form.nome.value;
        const cnpj_ong = form.cnpj.value;
        const cpf_founder = form.cpf.value;
        const email = form.email.value;
        const password = form.senha.value;
        const passwordConfirmacao = form.senha_confirmacao.value;

        if (ong_name && cnpj_ong && cpf_founder && email && password && passwordConfirmacao && password === passwordConfirmacao) {
            const ong = {
                ong_name,
                cnpj_ong,
                email,
                cpf_founder,
                password
            };
            setNgoDetails(ong);
            setFirstInputsFilled(true);
        } else {
            alert("Por favor, preencha todos os campos corretamente e verifique a confirmação da senha.");
        }
    };

    const handleFinalSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const description = form.descricao.value;
        const themes = [];


        if (form.educacao.checked) themes.push("EDUCACAO");
        if (form.saude.checked) themes.push("SAUDE");
        if (form.alimentacao.checked) themes.push("ALIMENTACAO");
        if (form.reabilitacao.checked) themes.push("REABILITACAO");

        const ong = {
            ...ngoDetails,
            description,
            themes
        };

        if (themes.length > 0) {
            console.log(ong);
            axios.post('http://localhost:9000/ongs/createOng', JSON.stringify(ong), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    console.log(response);
                    navigate("/autenticacaoDe2Fatores");
                })
                .catch(error => {
                    console.error("Houve um erro ao enviar os dados: ", error);
                });
        } else {
            alert("Por favor, selecione pelo menos uma habilidade.");
        }
    };

    const handleBack = () => {
        setFirstInputsFilled(false);
    };

    return (
        <div className="NGORegister">
            <section>
                {firstInputsFilled ? (
                    <form onSubmit={handleFinalSubmit}>
                        <h2>Crie sua Organização!</h2>
                        <textarea name="descricao" placeholder="Escreva sobre sua ONG" />
                        <input placeholder="Quais são as funções da sua ONG?" name="habilidades" type="text" />
                        <div className="Skills">
                            <span>
                                <label htmlFor="educacao">Educação</label>
                                <input type="checkbox" name="educacao" />
                            </span>

                            <span>
                                <label htmlFor="saude">Saúde</label>
                                <input type="checkbox" name="saude" />
                            </span>

                            <span>
                                <label htmlFor="alimentacao">Alimentação</label>
                                <input type="checkbox" name="alimentacao" />
                            </span>

                            <span>
                                <label htmlFor="reabilitacao">Reabilitação</label>
                                <input type="checkbox" name="reabilitacao" />
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
                        <input type="text" placeholder="cpf do fundador" name="cpf" required />
                        <input type="password" placeholder="Senha" name="senha" required />
                        <input type="password" placeholder="Confirme sua senha" name="senha_confirmacao" required />

                        {/* <div className="Certificates">
                            <label htmlFor="certificate1">Enviar arquivo</label>
                            <input type="file" name="certificate1" />
                            <span className="material-symbols-outlined">
                                folder_open
                            </span>

                            <label htmlFor="certificate2">Enviar arquivo</label>
                            <input type="file" name="certificate2" />
                            <span className="material-symbols-outlined">
                                folder_open
                            </span>

                            <label htmlFor="certificate3">Enviar arquivo</label>
                            <input type="file" name="certificate3" />
                            <span className="material-symbols-outlined">
                                folder_open
                            </span>
                        </div> */}

                        <div className="Buttons">
                            <button type="submit">Continuar</button>
                        </div>
                    </form>
                )}
            </section>
            <SideBanner />
        </div>
    );
};

export default NGORegister;
