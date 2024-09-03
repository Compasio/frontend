import React from "react";
import "./SecondPage.css";
import SearchPagesGallery from "../../components/Gallery/SearchPagesGallery/SearchPagesGallery";
import perfil2 from "../../img/perfil2.jpg"
import perfil2G1 from "../../img/perfil2G1.jpg"
import perfil2G2 from "../../img/perfil2G2.jpg"
import perfil2G3 from "../../img/perfil2G3.jpg"
import VoluntaryBanner from "../../components/Banners/VoluntaryBanner/VoluntaryBanner";

const SecondPage = () => {
    return (
        <div className="SecondPage">
            <header>
                <nav>
                    <a href="/buscarVoluntario">
                        <span class="material-symbols-outlined">
                            arrow_back
                        </span>
                    </a>
                    <div>
                        <span class="material-symbols-outlined">
                            supervised_user_circle
                        </span>
                        <h3>Janaína</h3>
                    </div>
                    <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
                </nav>
            </header>
            <main>
                <VoluntaryBanner
                    imgsrc={perfil2}
                    nome="Janaína Rosa de Souza"
                    idade="25 anos"
                    localizacao="São Paulo"
                    areadeatuacao="Limpeza marítima" />
            </main>
            <section>
                <SearchPagesGallery
                    img1={perfil2G1}
                    img2={perfil2G2}
                    img3={perfil2G3}
                />
            </section>
        </div>
    )
}

export default SecondPage
