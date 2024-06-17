import React from "react";
import "./NGOBanner.css"

const NGOBanner = (props) => {
    return (
        <div className="NGOBanner">
            <a href="/projetos">
                <span class="material-symbols-outlined">
                    info
                </span>
            </a>
            <img src={props.imgsrc} alt="" />
            <p>{props.descricao}</p>
        </div>
    )
}

export default NGOBanner
