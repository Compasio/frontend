import React from "react";
import "./Card.css"

const Card = (props) => {
    return (
        <div className="Card">
            <a href={props.link}>
                <img src={props.imgsrc} alt="" />
                <h3>{props.nome}</h3>
                <hr />
                <div>
                <p>{props.descricao}</p>
                <p>{props.topicos}</p>
                </div>
            </a>
        </div>
    )
}

export default Card