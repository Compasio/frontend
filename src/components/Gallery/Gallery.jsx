import React from "react";
import "./Gallery.css"
import pessoaimg1 from "../../img/carlos.jpg"
import pessoaimg2 from "../../img/mides.png"
import pessoaimg3 from "../../img/thais.png"
import pessoaimg4 from "../../img/kfuture.jpg"

const Gallery = (props) => {
    return (
        <div className="Gallery">
            <img src={pessoaimg1} alt="" />
            <img src={pessoaimg2} alt="" />
            <img src={pessoaimg3} alt="" />
            <img src={pessoaimg4} alt=""/>
        </div>
    )
}
export default Gallery
