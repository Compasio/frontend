import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(props.link)} className="Card">
                <img src={props.imgsrc} alt={props.nome} />
            <h3>{props.nome}</h3>
            <hr />
            <div>
                <p>{props.descricao}</p>
                <p>{props.topicos}</p>
            </div>
        </div>
    );
};

export default Card;
