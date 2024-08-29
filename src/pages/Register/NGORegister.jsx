import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import axios from "axios";
import "./NGORegister.css";

const NGORegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const [ngoDetails, setNgoDetails] = useState({});
    const [ngoList, setNgoList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:9000/sys/getOngThemes')
            .then(response => setNgoList(response.data))
            .catch(error => console.error("Erro ao buscar habilidades: ", error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.nome.value.trim();
        const cnpj = form.cnpj.value.trim();
        const cpf = form.cpf.value.trim();
        const email = form.email.value.trim();
        const password = form.senha.value.trim();
        const confirmPassword = form.senha_confirmacao.value.trim();

        if (name && cnpj && cpf && email && password && confirmPassword && password === confirmPassword) {
            setNgoDetails({
                ong_name: name,
                cnpj_ong: cnpj,
                email: email,
                cpf_founder: cpf,
                password: password
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
        const themes = ngoList.filter(theme => form[theme.toLowerCase()]?.checked);

        if (description && themes.length > 0) {
            const ngoData = {
                ...ngoDetails,
                description,
                themes
            };

            axios.post('http://localhost:9000/ongs/createOng', JSON.stringify(ngoData), {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(() => navigate("/autenticacaoDe2Fatores"))
                .catch(error => console.error("Erro ao enviar os dados: ", error));
        } else {
            alert("Por favor, preencha todos os campos corretamente e selecione pelo menos uma habilidade.");
        }
    };

    return (
        <div className="NGORegister">
            <section>
                {firstInputsFilled ? (
                    <form onSubmit={handleFinalSubmit}>
                        <h2>Crie sua Organização!</h2>
                        <textarea name="descricao" placeholder="Escreva sobre sua ONG" required />
                        <h3>Quais são as áreas da sua ONG?</h3>
                        <div className="Skills">
                            {ngoList.map(theme => (
                                <span key={theme} id={theme}>
                                    <label htmlFor={theme.toLowerCase()}>{theme}</label>
                                    <input type="checkbox" name={theme.toLowerCase()} />
                                </span>
                            ))}
                        </div>
                        <div className="Buttons">
                            <button type="button" onClick={() => setFirstInputsFilled(false)}>Voltar</button>
                            <button type="submit">Criar Conta</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>Crie sua Organização!</h2>
                        <input type="text" placeholder="Nome da ong" name="nome" required />
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="text" placeholder="CNPJ" name="cnpj" required />
                        <input type="text" placeholder="CPF do fundador" name="cpf" required />
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

export default NGORegister;
