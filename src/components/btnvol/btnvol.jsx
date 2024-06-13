import React from "react";
import "./btnvol.css";

const Btnvol = (props) => {
    return(
        <div className="btnvolunta" style={props.color}>
            <p>{props.text}</p>
        </div>
    )
}
export default Btnvol
