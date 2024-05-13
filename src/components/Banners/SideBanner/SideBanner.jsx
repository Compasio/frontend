import React from "react";
import "./SideBanner.css"
import Logo from "../../../img/logocomnome.svg"

const SideBanner = () => {
    return (
        <div className="SideBanner">
            <img src={Logo} alt="logo" />
        </div>
    )
}

export default SideBanner