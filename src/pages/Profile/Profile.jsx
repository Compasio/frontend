import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Logo from "../../img/logosemnome.svg";
import ProfileBanner from "../../components/Banners/ProfileBanner/ProfileBanner";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import "./Profile.css";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) throw new Error("Token não encontrado.");

        const decodedToken = jwtDecode(token);
        setUserType(decodedToken.type);
        const url = userType === "ong" ?
          `https://backend-production-ff4c.up.railway.app/ongs/getOngById/${id}` :
          `https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntaryById/${id}`;

        const response = await axios.get(url, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setUserData(response.data);
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

  return (
    <div className="Profile">
      <header>
        <nav>
          <figure>
            <img src={Logo} alt="Logo" />
            <figcaption>Compasio</figcaption>
          </figure>
          <div>
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </nav>
        <div className="Shadow"></div>
      </header>
      <main>
        <ProfileBanner
          userData={userData}
          userType={userType}
        />
      </main>
    </div>
  );
};

export default Profile;