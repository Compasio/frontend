import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import axios from "axios";
import "./VoluntaryRegister.css";

const VoluntaryRegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:9000/sys/getVoluntaryHabilities')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar habilidades: ", error);
            });
    }, []);

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
            const user = {
                nome,
                idade,
                cpf,
                email,
                senha
            };
            setUserDetails(user);
            setFirstInputsFilled(true);
        } else {
            alert("Por favor, preencha todos os campos corretamente e verifique a confirmação da senha.");
        }
    };

    const handleFinalSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const cozinhar = form.cozinhar.checked;
        const musica = form.musica.checked;
        const reformas = form.reformas.checked;
        const medicina = form.medicina.checked;
        const descricao = form.descricao.value;

        const user = {
            ...userDetails,
            descricao,
            cozinhar,
            musica,
            reformas,
            medicina
        };

        if (cozinhar || musica || reformas || medicina) {
            axios.post('http://localhost:9000/voluntarys/createVoluntary', JSON.stringify(user), {
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
        <div className="VoluntaryRegister">
            <section>
                {firstInputsFilled ? (
                    <form onSubmit={handleFinalSubmit}>
                        <h2>Crie sua conta!</h2>
                        <textarea name="descricao" placeholder="Fale um pouco sobre você" />
                        <input placeholder="Quais são as suas habilidades?" name="habilidades" type="text" />
                        <div className="Skills">
                            <span id="COZINHAR">
                                <label htmlFor="cozinhar">Cozinhar</label>
                                <input type="checkbox" name="cozinhar" />
                            </span>

                            <span id="MUSICA">
                                <label htmlFor="musica">Música</label>
                                <input type="checkbox" name="musica" />
                            </span>

                            <span id="REFORMA">
                                <label htmlFor="reformas">Reformas</label>
                                <input type="checkbox" name="reformas" />
                            </span>

                            <span id="MEDICINA">
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
                        <input type="email" placeholder="Email" name="email" required />
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
    );
};

export default VoluntaryRegister;