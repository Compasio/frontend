import React from 'react';
import "./FirstPageNGOProfileMain.css";
import SearchPagesGallery from "../../Gallery/SearchPagesGallery/SearchPagesGallery";

const FirstPageNGOProfileMain = (props) => {
  return (
    <div className="FirstPageNGOProfileMain">
      <img src={props.imgsrc} alt="" />
      <h1>{props.name}</h1>
      <span class="material-symbols-outlined">
        chevron_right
      </span>
      <figure>
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
      </figure>
      <SearchPagesGallery

      />
    </div>
  );
}

export default FirstPageNGOProfileMain;