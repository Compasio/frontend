import React from "react";
import "./FirstPage.css"
import NGOCard from "../../../components/Cards/NGOCard/NGOCard";

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
                    <NGOCard />
                    <NGOCard />
                    <NGOCard />
                </div>
            </main>
        </div>
    )
}

export default FirstPage