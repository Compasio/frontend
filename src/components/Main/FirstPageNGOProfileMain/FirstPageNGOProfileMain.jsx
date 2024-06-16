import React from 'react';
import "./FirstPageNGOProfileMain.css";
import Gallery from "../Gallery/Gallery";

const FirstPageNGOProfileMain = (props) => {
  return (
    <div className="FirstPageNGOProfileMain">
      <img src={props.imgsrc} alt="" />
      <h1>{props.name}</h1>
      <div className="projetos">
        <img className="ImgOng2" src={img2} alt="" />
        <img className="ImgOng3" src={img3} alt="" />
      </div>
      <div className="botaovoluntario">
        <Btnvol text="Voluntário" />
      </div>

      <div className="assdiv">
        <Btnvol text="Associados" />
      </div>

      <div className="galeriadebaixo">
        <Gallery />
      </div>
    </div>
  );
}

export default FirstPageNGOProfileMain;