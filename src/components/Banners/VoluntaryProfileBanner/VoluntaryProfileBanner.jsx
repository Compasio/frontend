import React from "react";
import "./VoluntaryProfileBanner.css"

const VoluntaryProfileBanner = (props) => {
    return (
        <div className="VoluntaryProfileBanner">
            <section>
                <img src={props.imgsrc} alt="" />
                <h1>{props.nome}</h1>
                <div>
                    <p>{props.localizacao}</p>
                    <p>{props.idade}</p>
                </div>
                <div>
                    <p>{props.areadeatuacao}</p>
                    <span class="material-symbols-outlined">
                        add
                    </span>
                </div>
            </section>
            <div>
                <img src={props.projeto1} alt="" />
                <img src={props.projeto2} alt="" />
                <img src={props.projeto3} alt="" />
                <span class="material-symbols-outlined">
                    add
                </span>
            </div>
        </div>
    )
}

export default VoluntaryProfileBanner
