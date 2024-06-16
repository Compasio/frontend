import React from "react"
import "./FirstPage.css"
import FirstPageNGOProfileMain from "../../components/Main/FirstPageNGOProfileMain/FirstPageNGOProfileMain"

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
                <FirstPageNGOProfileMain

                />
            </main>
        </div>
    )
}

export default FirstPage