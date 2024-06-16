import React from "react"
import "./FirstPage.css"
import FirstPageNGOProfileMain from "../../components/Main/FirstPageNGOProfileMain/FirstPageNGOProfileMain"

const FirstPage = () => {
    return (
        <div className="FirstPage">
            <header>
                <nav>
                    <h1>Perfil ONG</h1>
                    <span class="material-symbols-outlined">
                        arrow_back
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