import React from 'react';
import './ProfileBanner.css';

const ProfileBanner = ({ userData, currentUserId }) => {

  return (
    <div className="banner-container">
      <div className="profile-container">
        <img
          src={userData?.(userData.ImageResource &&
            userData.ImageResource.length > 0 &&
            userData.ImageResource[0].url) || "https://via.placeholder.com/100"}
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h2 className="profile-name">{userData?.fullname || "Nome"}</h2>
          <button className="contact-button">Chamar</button>
          {userData?.id === currentUserId && (
            <button className="edit-profile-button">Editar perfil</button>
          )}
        </div>
      </div>
      <div className="badge-container">
        <div className="badge">{userData?.skills || "Habilidade 1, 2, 3.."}</div>
        <div className="badge">{userData?.birthdate || "Data de nasc"}</div>
      </div>
      <div className="about-container">
        <h3>Sobre mim</h3>
        <p>{userData?.description || "Descrição"}</p>
      </div>
    </div>
  );
};

export default ProfileBanner;
