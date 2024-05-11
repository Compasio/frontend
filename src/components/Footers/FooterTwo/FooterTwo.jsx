import React from "react";
import "./FooterTwo.css"
import instagram from "../../../img/instagram.svg"
import facebook from "../../../img/facebook.svg"
import whatsapp from "../../../img/whatsapp.svg"
import xTwitter from "../../../img/x-twitter.svg"

const FooterTwo = () => {
    return (
        <footer className="FooterTwo">
            <div className="Column">
                <h2>Contato</h2>
                <p>Telefone: (48) xxxx-xxxx</p>
                <p>Email: compasioemail@gmail.com</p>
                <a href="#">Continue conectado com a gente</a>
                <div>
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
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo