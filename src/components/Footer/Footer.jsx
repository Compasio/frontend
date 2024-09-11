import React from "react";
import "./Footer.css"
// import instagram from " ../../img/instagram.svg"
// import facebook from "../../img/facebook.svg"
// import whatsapp from "../../img/whatsapp.svg"
// import xTwitter from "../../img/x-twitter.svg"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Column">
                <h2>Contato</h2>
                <p>Telefone: (48) xxxx-xxxx</p>
                <p>Email: compasioemail@gmail.com</p>
                <a href="/loginVoluntario">Continue conectado com a gente</a>
                {/* <div>
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#">
                        <img src={whatsapp} alt="" />
                    </a>
                    <a href="#">
                        <img src={xTwitter} alt="" />
                    </a>
                </div> */}
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