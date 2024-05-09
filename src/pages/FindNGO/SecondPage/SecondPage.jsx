import React from "react";
import "./SecondPage.css";
import NGOBanner from "../../../components/Banners/NGOBanner/NGOBanner";
import Gallery from "../../../components/Gallery/Gallery";
import medicossemfronteiras from "../../../img/medicosemfronteiras.png"
import medicossemfronteirasG1 from "../../../img/medicossemfronteirasG1.png"
import medicossemfronteirasG2 from "../../../img/medicossemfronteirasG2.png"
import medicossemfronteirasG3 from "../../../img/medicossemfronteirasG3.png"

const SecondPage = () => {
    return (
        <div className="Body">
            <header className="HeaderSecondPageNGO">
                <nav>
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                    <div>
                        <span class="material-symbols-outlined">
                            supervised_user_circle
                        </span>
                        <h3>Médicos Sem Fronteiras</h3>
                    </div>
                    <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
                </nav>
            </header>
            <main className="MainSecondPageNGO">
                <NGOBanner
                    imgsrc={medicossemfronteiras}
                    descricao="Médicos sem Fronteiras é uma organização internacional, não governamental e sem fins lucrativos que oferece ajuda médica e humanitária a populações em situações de emergência, em casos como conflitos armados, catástrofes, epidemias, fome e exclusão social. " />
            </main>
            <section className="GallerySecondPageNGO">
                <Gallery
                    img1={medicossemfronteirasG1}
                    img2={medicossemfronteirasG2}
                    img3={medicossemfronteirasG3}
                />
            </section>
        </div>
    )
}

export default SecondPage
