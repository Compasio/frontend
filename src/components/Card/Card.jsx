import React from "react";
import "./Card.css"

const Card = (props) => {
    return (
        <div className="Card">
            <a href={props.link}>
                <img src={props.imgsrc} alt="" />
                <p>{props.descricao}</p>
                <p>{props.temas}</p>
            </a>
        </div>
    )
}

export default Card