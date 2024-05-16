import React from "react";
import "./VoluntaryP.css";
import user from '../../img/userimg.png';
import quadra from '../../img/quadra.png';
import navio from '../../img/navio.png';
import vector1 from '../../img/Vector1.png';
import vector from '../../img/Vector.png';

export default function NGOVoluntary() {
    return (
        <div>
            <nav style={{ backgroundColor: "#4A806D", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "20px" }}>
                    <img src={user} alt="Imagem do usuário" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                </div>
                <div className="search-container">
                    <input type="text" className="search" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" width="24" height="24" viewBox="0 0 24 27" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
                </button>
            </nav>

            <div className="voluntariar-container">
                <div className="block1">
                    <img src={navio} alt="Imagem" style={{ width: "399px", height: "272px", borderRadius: "10px" }} />
                    <div>
                        <h2>Busca e Resgate</h2>
                        <p className="textp">
                            Médicos Sem Fronteiras (MSF) mantem atividades de busca e resgate para prestar assistência às pessoas forçadas a se arriscar na perigosa travessia do Mediterrâneo Central.
                        </p>
                    </div>
                    <button className="cta-button">Voluntariar</button>
                </div>
                <br />
                <div className="block2">
                    <img src={quadra} alt="Imagem" style={{ width: "399px", height: "272px", borderRadius: "10px" }} />
                    <div>
                        <h2>Senegal</h2>
                        <p className="textp">
                            Médicos Sem Fronteiras (MSF) mobilizou uma equipe de resposta no país pela primeira vez para ajudar no atendimento ao paciente, vigilância epidemiológica e promoção da saúde.
                        </p>
                    </div>
                    <button className="cta-button">Voluntariar</button>
                </div>
            </div>
            <footer style={{ position: "inherit", border: "2px solid", borderRadius: "5px", bottom: "0", left: "0", width: "100%", backgroundColor: "#4A806D", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: "999" }}>
                <img src={vector1} alt="Seta esquerda" style={{ width: "40px", height: "40px", cursor: "pointer" }} />
                <img src={vector} alt="Seta direita" style={{ width: "40px", height: "40px", cursor: "pointer", marginLeft: "auto" }} />
            </footer>
        </div>
    );
}
