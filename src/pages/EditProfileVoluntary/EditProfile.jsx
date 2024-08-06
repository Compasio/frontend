import React, { useState } from 'react';
import './EditProfile.css';
import photo from '../../img/photo.png'
import Vector from '../../img/Vector1.png'
const EditProfile = () => {
    const [image, setImage] = useState(photo);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    return (
        <div className="edit-profile-container">
            <header className="edit-profile-header">
                <button className="back-button"><img src={Vector} alt="" /></button>
                <h2 className='text-main'>Editar Perfil</h2>
            </header>
            <div className="edit-profile-content">
                <div className="edit-photo-section">
                    <div>
                      <img src={image} className="photo-icon" alt='Foto do Colaborador' />
                    </div>
                    <input type="file" onChange={handleImageChange} className="edit-photo-button"/>
                </div>
                <div className="profile-info">
                    <div className="info-item">
                        <label>Nome de Usuário</label><input type="text" defaultValue="Claudia_Ciclano" />
                    </div>
                    <div className="info-item">
                        <label>Nome</label>
                        <input type="text" defaultValue="Claudia de  Fulano Ciclano" />
                    </div>
                    <div className="info-item">
                        <label>Localização</label>
                        <input type="text" defaultValue="Florianópolis-SC" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
