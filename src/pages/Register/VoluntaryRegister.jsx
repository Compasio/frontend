import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import axios from "axios";
import "./VoluntaryRegister.css";

const VoluntaryRegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [habilitiesList, setHabilitiesList] = useState([]); // Estado para armazenar as habilidades
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:9000/sys/getVoluntaryHabilities')
            .then(response => {
                setHabilitiesList(response.data.habilities); // Armazena as habilidades recebidas no estado
                console.log(response);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar habilidades: ", error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullname = form.nome.value;
        const birthDate = form.data_nascimento.value;
        const cpf_voluntary = form.cpf.value;
        const email = form.email.value;
        const password = form.senha.value;
        const passwordC = form.senha_confirmacao.value;

        if (fullname && cpf_voluntary && birthDate && email && password && passwordC && password === passwordC) {
            const user = {
                fullname,
                birthDate,
                cpf_voluntary,
                email,
                password
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
        const description = form.descricao.value;
        const habilities = [];

        habilitiesList.forEach(hability => {
            if (form[hability.toLowerCase()].checked) habilities.push(hability);
        });

        const user = {
            ...userDetails,
            description,
            habilities
        };

        if (habilities.length > 0) {
            console.log(user);
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
                            {habilitiesList.map(hability => (
                                <span key={hability} id={hability}>
                                    <label htmlFor={hability.toLowerCase()}>{hability}</label>
                                    <input type="checkbox" name={hability.toLowerCase()} />
                                </span>
                            ))}
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
                        <input type="date" name="data_nascimento" required />
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
