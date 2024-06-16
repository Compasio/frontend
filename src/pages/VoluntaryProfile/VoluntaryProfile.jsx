import React from "react";
import "./VoluntaryProfile.css"
import Img from "../../img/perfil3.jpg"
import fotoprojeto1 from "../../img/fotoprojeto1.png"
import fotoprojeto2 from "../../img/fotoprojeto2.jpg"
import fotoprojeto3 from "../../img/fotoprojeto3.png"
import VoluntaryProfileBanner from "../../components/Banners/VoluntaryProfileBanner/VoluntaryProfileBanner";

const VoluntaryProfile = () => {
    return (
        <div className="VoluntaryProfile">
            <header>
                <nav>
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                    <h1>Claudia_Ciclano</h1>
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                </nav>
            </header>

            <section>
                <VoluntaryProfileBanner
                    imgsrc={Img}
                    nome="Claudia de Fulano Ciclano"
                    localizacao="Florianópolis-SC"
                    idade="37 anos"
                    areadeatuacao="Med. Veterinária"
                    projeto1={fotoprojeto1}
                    projeto2={fotoprojeto2}
                    projeto3={fotoprojeto3}
                />
            </section>
        </div>
    )
}

export default VoluntaryProfile