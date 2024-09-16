import React, { useState } from 'react';
import './ProfileBanner.css';
import EditProfile from '../../EditProfile/EditProfile';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileBanner = ({ userData, editPerfil, deletePerfil, id, gallery, logout, addImg }) => {
  const { userType, ong, voluntary, ImageResource } = userData || {};
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [galleryImages, setGalleryImages] = useState(gallery || []);
  const navigate = useNavigate();

  const numericId = Number(id);

  const redirectEditProfile = () => {
    setIsEditProfileVisible(true);
  };

  const closeEditProfile = () => {
    setIsEditProfileVisible(false);
  };

  const reqDelete = () => {
    const token = Cookies.get('token');

    if (userType === "ong") {
      axios.delete(`https://backend-production-ff4c.up.railway.app/ongs/removeOng/${numericId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      Cookies.remove('token', 'userType');
      navigate('/');
    } else if (userType === "voluntary") {
      axios.delete(`https://backend-production-ff4c.up.railway.app/voluntarys/removeVoluntary/${numericId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      Cookies.remove('token', 'userType');
      navigate('/');
    }
  };

  const reqLogout = async () => {
    const token = Cookies.get('token');

    try {
      await axios.post(`https://backend-production-ff4c.up.railway.app/auth/logoutUser`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      Cookies.remove('token');
      Cookies.remove('userType');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  const handleAddImage = async (event) => {
    const allFiles = event.target.files;
  
    if (allFiles.length === 0) {
      console.error('Nenhum arquivo selecionado.');
      return;
    }
  
    const maxFilesPerUpload = 5;
  
    if (allFiles.length > maxFilesPerUpload) {
      console.error(`Você pode adicionar no máximo ${maxFilesPerUpload} imagens por vez.`);
      return;
    }
  
    const token = Cookies.get('token');
  
    try {
      const uploadedImages = [];
      for (const file of allFiles) {
        const formData = new FormData();
        formData.append('files', file); 
        formData.append('id', numericId); 
  
        const response = await axios.post('https://backend-production-ff4c.up.railway.app/ongs/postPicture', formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        uploadedImages.push(response.data);
      }
      setGalleryImages([...galleryImages, ...uploadedImages]);
    } catch (error) {
      console.error('Erro ao adicionar a(s) imagem(ns):', error);
    }
  };
  
  return (
    <div className="ProfileBanner">
      <div className="Container">
        <img
          src={ImageResource?.[0]?.url}
          alt=""
        />
        <div className="Info">
          <h2>{userType === "ong" ? ong?.ong_name : voluntary?.fullname}</h2>
          <div>
            {editPerfil && (
              <button onClick={redirectEditProfile}>Editar perfil</button>
            )}
            {deletePerfil && (
              <button onClick={reqDelete}>Deletar perfil</button>
            )}
            {logout && (
              <button onClick={reqLogout}>Sair</button>
            )}
          </div>
        </div>
      </div>
      <div className="Badges">
        <div className="Badge">
          {userType === "ong" ?
            ong?.themes.map((theme, index) => (
              <div key={index}>
                {theme.replace(/_/g, ' ')}
              </div>
            ))
            :
            voluntary?.habilities.map((hability, index) => (
              <div key={index}>
                {hability.replace(/_/g, ' ')}
              </div>
            ))
          }
        </div>
        <div className={userType === "ong" ? "BadgeHidden" : "Badge"}>{userType === "ong" ? "" : voluntary?.birthDate}</div>
      </div>
      <div className="About">
        <h3>Sobre mim</h3>
        <p>{userType === "ong" ? ong?.description : voluntary?.description}</p>
      </div>
      {userType === "ong" && (
        <div className="Gallery">
          {galleryImages.map((picture) => (
            <img key={picture.id} src={picture.url} alt="" />
          ))}
          {addImg && (
            <input type="file" onChange={handleAddImage} />
          )}
        </div>
      )}
      {isEditProfileVisible && (
        <div className="Overlay">
          <div className="Modal">
            <EditProfile />
            <button onClick={closeEditProfile}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileBanner;
