import React from "react";
import FooterOne from "../../components/Footers/FooterOne/FooterOne"

const LandingPage = () => {
    return (
        <div className="Body">
            <header>
                <nav>
                    <ul>
                        <img src="" alt="" />
                    </ul>
                    <ul>
                        <li><a href="#"><p>Home</p></a></li>
                        <li><a href="#"><p>Sobre</p></a></li>
                        <li><a href="#"><p>Login Voluntariado</p></a></li>
                        <li><a href="#"><p>Login ONG</p></a></li>
                        <li><a href="#"><p>Contato</p></a></li>
                    </ul>
                </nav>
            </header>

            <section className="Presentation">
                <h1>Bem vindo ao Compasio</h1>
                <h3>Compaixão para o mundo</h3>
                <div>
                    <button>Comece como um voluntário</button>
                    <button>Comece como uma organização</button>
                </div>
            </section>

            <section className="AboutUs">
                <div className="Frame">
                    <div>
                        <h3>Sobre nós</h3>
                        <p>Começamos em 2024 com o intuito de crescer  nas comunidades e ONGs. A Compassio é uma pequena rede que oferece experiência para os participantes. Nós entendemos e aceitamos nossas responsabilidades, nós oferecemos programas inclusivos que são acessíveis aos indivíduos de todos os lugares, e avançarmos com esforço na nossa missão.</p>
                    </div>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </div>
                <div className="Frame">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <div>
                        <h3>Sobre nós</h3>
                        <p>Começamos em 2024 com o intuito de crescer  nas comunidades e ONGs. A Compassio é uma pequena rede que oferece experiência para os participantes. Nós entendemos e aceitamos nossas responsabilidades, nós oferecemos programas inclusivos que são acessíveis aos indivíduos de todos os lugares, e avançarmos com esforço na nossa missão.</p>
                        <span class="material-symbols-outlined">
                            volunteer_activism
                        </span>
                    </div>
                </div>
            </section>

            <FooterOne />

        </div >
    )
}

export default LandingPage