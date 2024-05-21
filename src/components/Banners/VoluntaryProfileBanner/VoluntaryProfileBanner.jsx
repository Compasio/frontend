import React from "react";
import "./VoluntaryProfileBanner.css"

const VoluntaryProfileBanner = (props) => {
    return (
        <div className="VoluntaryProfileBanner">
            <section>
                <img src={props.imgsrc} alt="" />
                <div>
                    <p><b>Nome:</b> {props.nome}</p>
                    <p><b>Localização:</b> {props.localizacao}</p>
                    <p><b>Idade:</b> {props.idade}</p>
                </div>
                <div>
                    <p>{props.areadeatuacao}</p>
                    <span class="material-symbols-outlined">
                        add
                    </span>
                </div>
            </section>
            <img src={props.projeto1} alt="" />
            <img src={props.projeto2} alt="" />
            <img src={props.projeto3} alt="" />
            <span class="material-symbols-outlined">
                add
            </span>
        </div>
    )
}

export default VoluntaryProfileBanner
