import React from 'react';
import './ProfileBanner.css'; 

const ProfileBanner = () => {
  return (
    <div className="banner-container">
      <div className="profile-container">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          className="profile-image" 
        />
        <div className="profile-info">
          <h2 className="profile-name">Jorge Santos</h2>
          <div className="follow-container">
            <span className="following">236 Seguindo</span>
            <span className="followers">433 Seguidores</span>
          </div>
          <button className="contact-button">📬 Contate-me</button>
        </div>
        <button className="edit-profile-button">Editar perfil</button>
      </div>
      <div className="badge-container">
        <div className="badge">📘 Engenharia/Tecnologia</div>
        <div className="badge">🎉 25 de agosto</div>
        <div className="badge">🔄 Disponibilidade limitada</div>
        <div className="badge">📍 Santa Catarina</div>
      </div>
      <div className="about-container">
        <h3>Sobre mim</h3>
        <p>Olá pessoal! Me chamo Jorginho, tenho 22 anos e sou formado em Marketing. Atualmente moro em Palhoça/SC e curso sistemas de informação na UNISUL. Sou muito criativo, divertido e proativo e busco projetos que me permitam aprender mais!</p>
      </div>
    </div>
  );
};

export default ProfileBanner;
