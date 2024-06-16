import React from "react"
import "./FirstPage.css"
import SearchPagesGallery from "../../components/Gallery/SearchPagesGallery/SearchPagesGallery"

const FirstPage = () => {
    return (
        <div className="FirstPage">
            <header>
                <nav>
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                    <h1>Perfil ONG</h1>
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                </nav>
            </header>

            <main>
                <div className="FirstPageNGOProfileMain">
                    <img src="" alt="" />
                    <h1>Médicos sem Fronteiras</h1>
                    <span class="material-symbols-outlined">
                        chevron_right
                    </span>
                    <figure>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </figure>
                    <SearchPagesGallery

                    />
                </div>
            </main>
        </div>
    )
}

export default FirstPage