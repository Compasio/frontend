import React from "react";
import "./NGOCard.css"

const NGOCard = (props) => {
    return (
        <div className="Card">
            <figure>
                <img src="#" alt="" />
            </figure>
            <span>
                <p>{props.descricao}</p>
            </span>
        </div>
    )
}

export default NGOCard