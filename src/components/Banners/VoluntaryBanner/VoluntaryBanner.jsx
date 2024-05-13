import React from "react";
import "./VoluntaryBanner.css"

const VoluntaryBanner = (props) => {
    return (
        <div className="VoluntaryBanner">
            <img src={props.imgsrc} alt="" />
            <div>
                <p><b>Nome:</b> {props.nome}</p>
                <p><b>Idade:</b> {props.idade}</p>
                <p><b>Localização:</b> {props.localizacao}</p>
                <p><b>Área de Atuação:</b> {props.areadeatuacao}</p>
                <p className="Rate"><b>Avaliação:</b>
                    <span class="material-symbols-outlined">
                        star
                    </span>
                    <span class="material-symbols-outlined">
                        star
                    </span>
                    <span class="material-symbols-outlined">
                        star
                    </span>
                    <span class="material-symbols-outlined">
                        star
                    </span>
                    <span class="material-symbols-outlined">
                        star_half
                    </span>
                </p>
            </div>

        </div>
    )
}

export default VoluntaryBanner
