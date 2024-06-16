import React from "react";
import "./ProfilePagesGallery.css"

const ProfilePagesGallery = (props) => {
  return (
    <div className="ProfilePagesGallery">
      <img src={props.img1} alt="" />
      <img src={props.img2} alt="" />
      <img src={props.img3} alt="" />
      <span class="material-symbols-outlined">
        keyboard_arrow_down
      </span>
    </div>
  )
}

export default ProfilePagesGallery