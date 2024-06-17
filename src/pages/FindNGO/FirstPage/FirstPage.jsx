import React from "react";
import "./FirstPage.css"
import Card from "../../../components/Card/Card";
import medicossemfronteiras from "../../../img/medicosemfronteiras.png";
import maismedicos from "../../../img/maismedicos.png";
import cidadaniaanima from "../../../img/cidadaniaanimal.png";

const FirstPage = () => {
    return (
        <div className="FirstPage">
            <header>
                <nav>
                    <a href="/perfilVoluntario">
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                    </a>
                    <input type="text" placeholder="Procurar ONG's" />
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                </nav>
            </header>
            <main>
                <div className="Buttons">
                    <button type="button">Animais</button>
                    <button type="button">Crianças</button>
                    <button type="button">Idosos</button>
                    <button type="button">Deficientes</button>
                    <button type="button">Adolescentes</button>
                </div>
                <div className="Cards">
                    <Card
                        link="/ONG"
                        imgsrc={medicossemfronteiras}
                        descricao="A sua doação não 
tem fronteiras!
Doe para Médicos
sem fronteiras e ajude 
a levar cuidados para 
quem precisa."/>
                    <Card
                        imgsrc={maismedicos}
                        descricao="O Mais Médicos compõe 
um conjunto de ações e
iniciativas do governo 
para o fortalecimento 
da Atenção Primária à 
Saúde do país.  
Ajude você também!"/>
                    <Card
                        imgsrc={cidadaniaanima}
                        descricao="Somos um grupo 
voluntários apaixonados
por animais e juntos 
realizamos um lindo 
trabalho de defesa e
proteção animal em
nossa ONG."/>
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