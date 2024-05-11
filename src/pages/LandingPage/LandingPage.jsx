import React from "react";
import "./LandingPage.css"
import FooterOne from "../../components/Footers/FooterOne/FooterOne";
import FooterTwo from "../../components/Footers/FooterTwo/FooterTwo";

const LandingPage = () => {
    return (
        <div className="Body">
            <header>
                <nav className="navegar">
                    <img className="cabecalho" src="ilus.png" alt="imagem" />
                    <ul className="lista">
                        <li><a href="#"><p>Home</p></a></li>
                        <li><a href="#"><p>Sobre</p></a></li>
                        <li><a href="#"><p>Login Voluntariado</p></a></li>
                        <li><a href="#"><p>Login ONG</p></a></li>
                        <li><a href="#"><p>Contato</p></a></li>
                    </ul>
                </nav>
            </header>

            <section className="Presentation">
                                                      
                <div className="inicio">
                    <h1>Bem-vindo a Compasio</h1>
                    <h3>Experiências Inesquecíveis</h3>
                    <h2>Compaixão para o mundo</h2>
                </div>
                <div className="botoes">

                    <button>Comece como um voluntário</button>
                    <button>Comece como uma organização</button>
                </div>
            </section>

            <section className="AboutUs">
                <div className="Frame1">
                    <div className="sobre">
                        <h2>Sobre nós
                        </h2>
                        <p>Começamos em 2024 com o intuito de crescer  nas comunidades e ONGs.
                            A Compassio é uma pequena rede que oferece experiência para os participantes.
                            Nós entendemos e aceitamos nossas responsabilidades, nós oferecemos programas
                            inclusivos que são acessíveis aos indivíduos de todos os lugares, e avançarmos com esforço na nossa missão.</p>
                        <span class="material-symbols-outlined">
                            volunteer_activism
                        </span>
                    </div>
                    <figure className="figuredonation">
                        <img src="doacao.jpeg" alt="" srcset="" />
                    </figure>
                </div>

                
                <div className="Frame2">
                <figure>
                        <img src="sorrindo.jpeg" alt="" srcset="" />
                    </figure>
                    <div className="doacao">
                
                        <h3>Doação Simples e Poderosa</h3>
                        <p>A Compasio conecta quem tem e quem precisa,
                            executamos uma associação com programas e projetos variados com foco nas pessoas.
                            Clique no coração abaixo para fazer sua contribuição!</p>
                        <span class="material-symbols-outlined">
                            heart_plus
                        </span>
                    </div>
                   
                </div>


            </section>

            <FooterOne />


        </div >
    )
}

export default LandingPage