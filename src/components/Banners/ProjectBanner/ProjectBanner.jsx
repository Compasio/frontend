import React from "react";
import "./ProjectBanner.css"

const ProjectBanner = (props) => {
    return (
        <div className="ProjectBanner">
            <figure>
                <img src={props.imgsrc} alt="" />
            </figure>
            <div>
                <h1>{props.nome}</h1>
                <p>{props.descricao}</p>
                <button type="button">Voluntariar</button>
            </div>
        </div>
    )
}

export default ProjectBanner