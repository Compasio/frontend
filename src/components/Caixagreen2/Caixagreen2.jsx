import React from 'react';
import "./Caixagreen2.css";
import img5 from '../../../public/MedicosBR.jpeg';
import img4 from  '../../../public/ongpets.jpg';
import Btnvol from "../btnvol/btnvol";

const Caixagreen = (props) => {
    return (
        <div className="Caixagreen2">
            <img className="Medicosemforntimg2" src={props.imgsrc} alt="" />
            <div className="cubo2"><div>
                    <p className="textomedicosemfon2"><b>Médicos sem Fronteira</b> {props.nome}
                    </p>
                    
                </div>
                <div className="projetosdebaixo">
                    <img className="ImgOng4" src={img4} alt="" />
                    <img className="ImgOng5" src={img5} alt="" />
                </div>
                <div className="botaovoluntariodesativo">   
                    <Btnvol text="Voluntáriotrue"/>
                </div>
                
                <div className="assdivdesativo">
                    <Btnvol text="Associadostrue"/>
                </div>
            </div>
        </div>
    );
}
export default Caixagreen;