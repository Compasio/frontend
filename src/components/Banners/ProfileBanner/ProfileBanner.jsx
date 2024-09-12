import React from 'react';
import './ProfileBanner.css';

const ProfileBanner = ({ userData, editPerfil }) => {
  const { userType, ong, voluntary, ImageResource } = userData || {};

  return (
    <div className="ProfileBanner">
      <div className="Container">
        <img
          src={ImageResource?.[0]?.url}
          alt=""
        />
        <div className="Info">
          <h2>{userType === "ong" ? ong?.ong_name : voluntary?.fullname}</h2>
          {editPerfil && (
            <button>Editar perfil</button>
          )}
        </div>
      </div>
      <div className="Badges">
        <div className="badge">
          {userType === "ong" ?
            ong?.themes.map((theme, index) => (
              <div key={index} className="badge-item">
                {theme}
              </div>
            ))
            :
            voluntary?.habilities.map((hability, index) => (
              <div key={index} className="badge-item">
                {hability}
              </div>
            ))
          }
        </div>
        <div className="badge">{userType === "ong" ? "" : voluntary?.birthDate}</div>
      </div>
      <div className="About">
        <h3>Sobre mim</h3>
        <p>{userType === "ong" ? ong?.description : voluntary?.description}</p>
      </div>
    </div>
  );
};

export default ProfileBanner;
