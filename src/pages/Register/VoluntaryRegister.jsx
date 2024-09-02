import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import axios from "axios";
import "./VoluntaryRegister.css";

const VoluntaryRegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [habilitiesList, setHabilitiesList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://backend-production-ff4c.up.railway.app/sys/getVoluntaryHabilities')
            .then(response => setHabilitiesList(response.data))
            .catch(error => console.error("Houve um erro ao buscar habilidades: ", error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullname = form.nome.value.trim();
        const birthDate = form.data_nascimento.value.trim();
        const cpf_voluntary = form.cpf.value.trim();
        const email = form.email.value.trim();
        const password = form.senha.value.trim();
        const confirmPassword = form.senha_confirmacao.value.trim();

        if (fullname && cpf_voluntary && birthDate && email && password && confirmPassword && password === confirmPassword) {
            setUserDetails({
                fullname,
                birthDate,
                cpf_voluntary,
                email,
                password
            });
            setFirstInputsFilled(true);
        } else {
            alert("Por favor, preencha todos os campos corretamente e verifique a confirmação da senha.");
        }
    };

    const handleFinalSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const description = form.descricao.value.trim();
        const habilities = habilitiesList.filter(hability => form[hability.toLowerCase()]?.checked);

        if (description && habilities.length > 0) {
            const userData = {
                ...userDetails,
                description,
                habilities
            };

            axios.post('https://backend-production-ff4c.up.railway.app/voluntarys/createVoluntary', JSON.stringify(userData), {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(() => navigate("/autenticacaoDe2Fatores?tipo=voluntario"))
                .catch(error => console.error("Erro ao enviar os dados: ", error));
        } else {
            alert("Por favor, preencha todos os campos corretamente e selecione pelo menos uma habilidade.");
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
                        <textarea name="descricao" placeholder="Fale um pouco sobre você" required />
                        <h3>Quais são suas habilidades?</h3>
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
