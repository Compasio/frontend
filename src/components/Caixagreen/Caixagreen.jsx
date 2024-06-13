import React from "react";
import "./Caixagreen.css";
import img1 from "../../img/ong img 1.jpg";
import img2 from "../../img/ong ima 2.jpg";
import img3 from "../../img/ong img 3.jpg";
import Gallery from "../Gallery/Gallery";
import Btnvol from "../btnvol/btnvol";
// import Btnass from "../btnass/btnass";

const Caixagreen = (props) => {
    return (
        <div className="Caixagreen">
            <img className="Medicosemforntimg" src={props.imgsrc} alt="" />
            <div className="cubo"><div>
                    <p className="textomedicosemfont"><b>Médicos sem Fronteira</b> {props.nome}
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                    </p>
                    
                </div>
                <div className="projetos">
                    <img className="ImgOng2" src={img2} alt="" />
                    <img className="ImgOng3" src={img3} alt="" />
                </div>
                <div className="botaovoluntario">
                    <Btnvol text="Voluntário"/>
                </div>
                
                <div className="assdiv">
                    <Btnvol text="Associados"/>
                </div>

                <div className="galeriadebaixo">
                    <Gallery />
                </div>
            </div>
        </div>
    );
}

export default Caixagreen;