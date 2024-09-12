import React from "react";
import Medico from "../../img/medicosemfronteiras.png";
import Maismedicos from "../../img/maismedicos.png";
import Animais from "../../img/cidadaniaanimal.png";
import "./APIPage.css"

const APIPage = () => {
    return (
        <div className="Firstpage">
            <header>
                <nav>
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                    <text>Encontre ONG`S na sua região!</text>
                    <input type="text" placeholder="Procurar ONG's" />
                    <span class="material-symbols-outlined Search">
                        search
                    </span>
                </nav>
            </header>
            <div className="Api"></div>
            <section>
                <div className="Cards">
                    <div className="card1">
                        <img src={Medico} alt="" />
                        A sua doação não
                        tem fronteiras!
                        Doe para Médicos
                        sem fronteiras e ajude
                        a levar cuidados para
                        quem precisa.
                    </div>

                    <div className="card2">
                        <img src={Maismedicos} alt="" />
                        O Mais Médicos compõe
                        um conjunto de ações e
                        iniciativas do governo
                        para o fortalecimento
                        da Atenção Primária à
                        Saúde do país.
                    </div>
                    <div className="card3">
                        <img src={Animais} alt="" />
                        Somos um grupo
                        voluntários apaixonados
                        por animais e juntos
                        realizamos um lindo
                        trabalho de defesa e
                        proteção animal.
                    </div>
                </div>
            </section>
        </div>


    )
}
export default APIPage