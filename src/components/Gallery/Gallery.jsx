import React from "react";
import "./Gallery.css"

const Gallery = (props) => {
    return (
        <div className="Gallery">
            <img src={props.img1} alt="" />
            <img src={props.img2} alt="" />
            <img src={props.img3} alt="" />
        </div>
    )
}

export default Gallery
