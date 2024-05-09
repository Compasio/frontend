import React from "react";
import "./FirstPage.css"
import NGOCard from "../../../components/Cards/NGOCard/NGOCard";
import medicossemfronteiras from "../../../img/medicosemfronteiras.png";
import maismedicos from "../../../img/maismedicos.png";
import cidadaniaanima from "../../../img/cidadaniaanimal.png";

const FirstPage = () => {
    return (
        <div className="Body">
            <header className="HeaderFirstPageNGO">
                <nav>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                    <input type="text" placeholder="Procurar ONG's" />
                    <span class="material-symbols-outlined Search">
                        search
                    </span>
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                </nav>
            </header>
            <main className="MainFirstPageNGO">
                <div className="Buttons">
                    <button type="button">Animais</button>
                    <button type="button">Crianças</button>
                    <button type="button">Idosos</button>
                    <button type="button">Deficientes</button>
                    <button type="button">Adolescentes</button>
                </div>
                <div className="Cards">
                    <NGOCard
                        imgsrc={medicossemfronteiras}
                        descricao="A sua doação não 
tem fronteiras!
Doe para Médicos
sem fronteiras e ajude 
a levar cuidados para 
quem precisa."/>
                    <NGOCard
                        imgsrc={maismedicos}
                        descricao="O Mais Médicos compõe 
um conjunto de ações e
iniciativas do governo 
para o fortalecimento 
da Atenção Primária à 
Saúde do país.  
Ajude você também!"/>
                    <NGOCard
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
            <footer className="FooterFirstPageNGO">
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