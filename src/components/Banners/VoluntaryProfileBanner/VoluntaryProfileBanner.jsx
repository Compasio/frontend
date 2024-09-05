import React from "react";
import "./VoluntaryProfileBanner.css"

const VoluntaryProfileBanner = (props) => {
    return (
        <div className="VoluntaryProfileBanner">
            <section>
                <div className="Presentation">
                    <figure>
                        <img src={props.imgsrc} alt="" />
                    </figure>
                    <div>
                        <h1>{props.nome}</h1>
                        {/* <p><span class="material-symbols-outlined">
                            location_on
                        </span> {props.localizacao}</p> */}
                        <p>{props.datanasc}</p>
                        <p>{props.desc}</p>
                    </div>
                </div>
                <div className="OccupationArea">
                    <p>{props.areadeatuacao}</p>
                    {/* <span class="material-symbols-outlined">
                        add
                    </span> */}
                </div>
            </section>
            {/* <div>
                <img src={props.projeto1} alt="" />
                <img src={props.projeto2} alt="" />
                <img src={props.projeto3} alt="" />
                <span class="material-symbols-outlined">
                    add
                </span>
            </div> */}
        </div>
    )
}

export default VoluntaryProfileBanner
