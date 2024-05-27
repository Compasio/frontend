import React, { useState } from "react";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import "./VoluntaryRegister.css";

const VoluntaryRegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const nome = form.nome.value;
        const idade = form.idade.value;
        const cpf = form.cpf.value;
        const email = form.email.value;
        const senha = form.senha.value;
        const senhaConfirmacao = form.senha_confirmacao.value;

        if (nome && cpf && idade && email && senha && senhaConfirmacao) {
            setFirstInputsFilled(true);
        } else {
            console.error("Dados não preenchidos")
        }
    };

    return (
        <div className="VoluntaryRegister">
            <section>
                {firstInputsFilled ? (
                    <form>
                        <textarea name="descricao" placeholder="Fale um pouco sobre você" />

                        <label htmlFor="habilidades">Quais são as suas habilidades?</label>
                        <input type="text" name="habilidades" />

                        <input type="checkbox" name="cozinhar" /> Cozinhar
                        <input type="checkbox" name="musica" /> Música
                        <input type="checkbox" name="reformas" /> Reformas
                        <input type="checkbox" name="medicina" /> Medicina
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
                        <button type="submit">Continuar</button>
                    </form>
                )}
            </section>
            <SideBanner />
        </div>
    );
};

export default VoluntaryRegister;
