import React from "react";
import "./PageVoluntario.css"
import Foto from "../../img/pagevoluntariofoto.jpg"
import Ong1 from "../../img/pagevoluntarioong1.png"
import Ong2 from "../../img/pagevoluntarioong2.jpg"
import Ong3 from "../../img/pagevoluntarioong3.png"

const PageVoluntario = () => {
    return (
        <div className="PageVoluntario">
            <header className="corpo">
                <div className="seta">
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                </div>
                <h1>Claudia_Ciclano</h1>
                <div className="config">
                    <span className="icon2" class="material-symbols-outlined">
                        settings
                    </span>
                </div>
            </header>

            <div className="fundo">
                <img className="Foto" src={Foto} alt="" />
                <section className="information">
                    <h2> Claudia de Fulano Ciclano</h2>
                    <p>Florianópolis-SC.</p>
                    <p>Amante da Natureza.</p>
                    <p>37 anos.</p>

                    <div className="adicionar">
                        <button className="botao">Med. Veterinária</button>
                        <div className="add1">
                            <span className="icon4" class="material-symbols-outlined">
                                add
                            </span>
                        </div>
                    </div>
                </section>
            </div>

            <div className="projetos">
                <img className="Ong1" src={Ong1} alt="" />
                <img className="Ong2" src={Ong2} alt="" />
                <img className="Ong3" src={Ong3} alt="" />

                <div className="add2">
                    <span className="icon5" class="material-symbols-outlined">
                        add
                    </span>
                </div>
            </div>
        </div>
    )
}
export default PageVoluntario