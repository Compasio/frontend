import React from "react";
import "./LandingPage.css"
import FooterOne from "../../components/Footers/FooterOne/FooterOne";
import { Link } from "react-router-dom";
import Logo from "../../img/logocomnome.svg"
import Img1 from "../../img/landingpageimg1.jpeg"
import Img2 from "../../img/landingpageimg2.jpg"

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <header>
                <nav>
                    <img src={Logo} alt="" />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#AboutUs">Sobre</a></li>
                        <li><a href="/loginVoluntario">Login Voluntariado</a></li>
                        <li><a href="/loginONG">Login ONG</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </header>

            <section className="Presentation">
                <div>
                    <h1>Bem-vindo a Compasio</h1>
                    <h2>Compaixão para o mundo</h2>
                </div>
                <div className="Buttons">
                    <a href="criarVoluntario">
                        <button>Comece como um voluntário</button>
                    </a>
                    <a href="criarONG">
                        <button>Comece como uma organização</button>
                    </a>
                </div>
            </section>

            <section id="AboutUs" className="AboutUs">
                <div className="Frame">
                    <div className="Left">
                        <h2>Sobre nós</h2>
                        <p>Começamos em 2024 com o intuito de crescer  nas comunidades e ONGs.
                            A Compassio é uma pequena rede que oferece experiência para os participantes.
                            Nós entendemos e aceitamos nossas responsabilidades, nós oferecemos programas
                            inclusivos que são acessíveis aos indivíduos de todos os lugares, e avançarmos com esforço na nossa missão.</p>
                    </div>
                    <img className="Img1" src={Img1} alt="" />
                </div>


                <div className="Frame">
                    <img className="Img2" src={Img2} alt="" />
                    <div className="Right">
                        <h2>Doação Simples e Poderosa</h2>
                        <p>A Compasio conecta quem tem e quem precisa,
                            executamos uma associação com programas e projetos variados com foco nas pessoas.
                            Clique no coração abaixo para fazer sua contribuição!</p>
                        <Link to='./doacao'>
                            <span class="material-symbols-outlined">
                                heart_plus
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
            <div id="contact">
                <FooterOne />
            </div>
        </div>
    )
}

export default LandingPage