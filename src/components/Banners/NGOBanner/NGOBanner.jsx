import React from "react";
import "./NGOBanner.css"

const NGOBanner = (props) => {
    return (
        <div className="NGOBanner">
            <span class="material-symbols-outlined">
                info
            </span>
            <img src={props.imgsrc} alt="" />
            <p>{props.descricao}</p>
        </div>
    )
}

export default NGOBanner
