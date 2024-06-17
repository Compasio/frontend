import React from "react"
import "./FirstPage.css"
import ImgSrc from "../../img/medicosemfronteiras.png";
import Res1 from "../../img/perfil1.jpg";
import Res2 from "../../img/perfil2.jpg";
import Res3 from "../../img/perfil3.jpg";
import G1 from "../../img/medicossemfronteirasG1.png";
import G2 from "../../img/medicossemfronteirasG2.png";

const FirstPage = () => {
    return (
        <div className="FirstPage">
            <header>
                <nav>
                    <a href="/buscarVoluntario">
                        <span class="material-symbols-outlined">
                            arrow_back
                        </span>
                    </a>
                    <h1>Perfil ONG</h1>
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                </nav>
            </header>

            <main>
                <div className="Top">
                    <figure>
                        <img src={ImgSrc} alt="" />
                    </figure>
                    <section>
                        <div>
                            <h1>Médicos sem Fronteiras</h1>
                            <a href="/perfilONG2">
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </a>
                        </div>
                        <div>
                            <img src={G1} alt="" />
                            <img src={G2} alt="" />
                        </div>
                    </section>
                </div>

                <div className="Bottom">
                    <div className="Options">
                        <h2>Voluntários</h2>
                        <h2>Associados</h2>
                    </div>
                    <div className="Results">
                        <img src={Res1} alt="" />
                        <img src={Res2} alt="" />
                        <img src={Res3} alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FirstPage