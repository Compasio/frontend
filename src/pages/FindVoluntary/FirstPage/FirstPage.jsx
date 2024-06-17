import React from "react";
import "./FirstPage.css"
import Card from "../../../components/Card/Card";
import perfil1 from "../../../img/perfil1.jpg";
import perfil2 from "../../../img/perfil2.jpg";
import perfil3 from "../../../img/perfil3.jpg";

const FirstPage = () => {
    return (
        <div className="FirstPage">
            <header>
                <nav>
                    <a href="/perfilONG">
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                    </a>
                    <input type="text" placeholder="Procurar voluntários" />
                </nav>
            </header>
            <main>
                <div className="Cards">
                    <Card
                        imgsrc={perfil1}
                        descricao="Olá! Me chamo Claudio
                            Tenho 37 anos e 
                            resido em Florianópolis."/>
                    <Card
                        link="/Voluntario"
                        imgsrc={perfil2}
                        descricao="Olá! Me chamo Janaína
                            Tenho 25 anos e 
                            resido em São Paulo."/>
                    <Card
                        imgsrc={perfil3}
                        descricao="Olá! Me chamo Rita
                            Tenho 22 anos e 
                            resido em Criciúma."/>
                </div>
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
    )
}

export default FirstPage