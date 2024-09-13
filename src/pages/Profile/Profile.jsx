  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import { useParams } from "react-router-dom";
  import Logo from "../../img/logosemnome.svg";
  import ProfileBanner from "../../components/Banners/ProfileBanner/ProfileBanner";
  import Cookies from "js-cookie";
  import { useNavigate } from "react-router-dom";
  import { jwtDecode } from "jwt-decode";
  import "./Profile.css";

  const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [userType, setUserType] = useState("");
    const [currentUserId, setCurrentUserId] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editPerfil, setEditPerfil] = useState(false)
    const [gallery, setGallery] = useState([]);
    const [deletePerfil, setDeletePerfil] = useState(false)
    const [logout, setLogout] = useState(false)
    const [addImg, setAddImg] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
      const fetchGallery = async () => {
        try {
          if (id) {
            const response = await axios.get(`https://backend-production-ff4c.up.railway.app/ongs/getPictures/${id}`);
            setGallery(response.data.pictures || []);
          }
        } catch (error) {
          setError("Erro ao buscar dados do perfil.");
        }
      };

      fetchGallery();
    }, [id]);



    useEffect(() => {
      const fetchProfileData = async () => {
        try {
          const token = Cookies.get('token');
          let decodedToken = null;
          let url = "";

          if (token) {
            decodedToken = jwtDecode(token);
            const numericUserId = Number(decodedToken.id);
            const numericProfileId = Number(id);
            setCurrentUserId(numericUserId);
            setUserType(decodedToken.userType);

            if (userType === "ong") {
              if (numericUserId === numericProfileId) {
                url = `https://backend-production-ff4c.up.railway.app/ongs/getOngById/${numericProfileId}`;
                setEditPerfil(true)
                setDeletePerfil(true)
                setLogout(true)
                setAddImg(true)
              } else {
                url = `https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntaryById/${numericProfileId}`;
              }
            } else {
              if (numericUserId === numericProfileId) {
                url = `https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntaryById/${numericProfileId}`;
                setEditPerfil(true)
                setDeletePerfil(true)
                setLogout(true)
              } else {
                url = `https://backend-production-ff4c.up.railway.app/ongs/getOngById/${numericProfileId}`;
              }
            }

            const response = await axios.get(url);
            setUserData(response.data);
          }
        } catch (error) {
          setError("Erro ao buscar dados do perfil.");
        } finally {
          setLoading(false);
        }
      };

      fetchProfileData();
    }, [id, userType]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    const redirectHome = () => {
      navigate('/busca')
    }

    const handleProfileRedirect = () => {
      navigate(`/perfil/${currentUserId}`);
    }

    return (
      <div className="Profile">
        <header>
          <nav>
            <figure>
              <img src={Logo} alt="Logo" />
              <figcaption>Compasio</figcaption>
            </figure>
            <div>
              <span onClick={redirectHome} className="material-symbols-outlined">search</span>
              <span onClick={handleProfileRedirect} className="material-symbols-outlined">account_circle</span>
            </div>
          </nav>
          <div className="Shadow"></div>
        </header>
        <main>
          <ProfileBanner
            editPerfil={editPerfil}
            deletePerfil={deletePerfil}
            userData={userData}
            id={id}
            currentUserId={currentUserId}
            gallery={gallery}
            logout={logout}
            addImg={addImg}
          />
        </main>
      </div>
    );
  };

  export default Profile;
