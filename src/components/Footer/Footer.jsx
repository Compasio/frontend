import React from "react";
import "./Footer.css"
import instagram from "../../img/instagram.svg"
import tiktok from "../../img/tiktok.svg"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Column">
                <h2>Contato</h2>
                <p>Email: compasiofoundation@zohomail.com</p>
                <a href="/login">Continue conectado com a gente</a>
                <div>
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#">
                        <img src={tiktok} alt="" />
                    </a>
                </div>
            </div>

            <div className="Column">
                <p>Inscreva-se através do seu e-mail para receber informações sobre voluntariados na sua área!</p>
                <div>
                    <input type="text" placeholder="Insira seu e-mail aqui!" />
                    <button>Enviar</button>
                </div>
                <p>&copy; Compasio 2024 | Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer