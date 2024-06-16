import React from "react";
import "./Project.css";
import projeto1 from '../../img/projeto1.png';
import projeto2 from '../../img/projeto2.png';
import ProjectBanner from "../../components/Banners/ProjectBanner/ProjectBanner";

const Project = () => {
    return (
        <div className="Project">
            <header>
                <nav>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                    <input type="text" placeholder="Pesquisar projeto" />
                    <span class="material-symbols-outlined Search">
                        search
                    </span>
                </nav>
            </header>
            
            <main>
                <ProjectBanner
                    imgsrc={projeto1}
                    nome="Busca e Resgate"
                    descricao="Médicos Sem Fronteiras (MSF) mantem atividades de busca e resgate para prestar assistência às pessoas forçadas a se arriscar na perigosa travessia do Mediterrâneo Central."
                />

                <ProjectBanner
                    imgsrc={projeto2}
                    nome="Senegal"
                    descricao="Médicos Sem Fronteiras (MSF) mobilizou uma equipe de resposta no país pela primeira vez para ajudar no atendimento ao paciente, vigilância epidemiológica e promoção da saúde."
                />
            </main>

            <footer>
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
                <span class="material-symbols-outlined">
                    arrow_forward
                </span>
            </footer>
        </div>
    );
}

export default Project