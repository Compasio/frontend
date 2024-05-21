import React from "react";
import "./NotFound.css"

const NotFound = () => {
    return (
        <>
            <div className="NotFound">
                <h3>404</h3>
                <p>Oops! A página que você está procurando não foi encontrada.</p>
                <a href="/">Voltar para a página inicial</a>
            </div>
        </>
    )
}

export default NotFound