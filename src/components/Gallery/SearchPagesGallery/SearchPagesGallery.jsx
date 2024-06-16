import React from "react";
import "./SearchPagesGallery.css"

const SearchPagesGallery = (props) => {
    return (
        <div className="SearchPagesGallery">
            <img src={props.img1} alt="" />
            <img src={props.img2} alt="" />
            <img src={props.img3} alt="" />
        </div>
    )
}

export default SearchPagesGallery