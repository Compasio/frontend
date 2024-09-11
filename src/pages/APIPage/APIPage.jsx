import React from "react";
import medico from "../../img/medico.png";
import animal from "../../img/animal.png";
import mais from "../../img/mais.jpeg"

const APIPage = () => {
    return (
        <div className="FirstPage">
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
            <div className="Cards">
                <div className="card1"

                    imgsrc={medico}
                    text="Médico sem Fronteiras"
                    descricao="A sua doação não
                            tem fronteiras!
                            Doe para Médicos
                            sem fronteiras e ajude
                            a levar cuidados para
                            quem precisa."/>
                <div className="card2"
                    imgsrc={mais}
                    text="Mais Medicos"
                    descricao="O Mais Médicos compõe
                            um conjunto de ações e
                            iniciativas do governo
                            para o fortalecimento
                            da Atenção Primária à
                            Saúde do país."/>
                <div className="card3"
                    imgsrc={animal}
                    text="Cidadania Animal"
                    descricao="Somos um grupo
                            voluntários apaixonados
                            por animais e juntos
                            realizamos um lindo
                            trabalho de defesa e
                            proteção animal."/>
            </div>
        </div>


    )
}
export default APIPage
