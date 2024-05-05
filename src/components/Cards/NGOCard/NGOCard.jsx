import React from "react";
import "./NGOCard.css"

const NGOCard = (props) => {
    return (
        <div className="Card">
            <img src={props.imgsrc} alt="" />
            <p>{props.descricao}</p>
        </div>
    )
}

export default NGOCard