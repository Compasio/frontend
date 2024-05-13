import React from "react";
import "./Card.css"

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.imgsrc} alt="" />
            <p>{props.descricao}</p>
        </div>
    )
}

export default Card