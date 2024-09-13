import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "./EditProfile.css";

const EditProfile = () => {
  const [items, setItems] = useState([]);
  const [userType, setUserType] = useState("");
  const [userId, setUserId] = useState("");
  const [fullname, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [ongName, setOngName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = Cookies.get('token');
        if (token) {
          const decodedToken = jwtDecode(token);
          setUserId(decodedToken.id);
          setUserType(decodedToken.userType);
        }
      } catch (error) {
        console.error("Erro ao buscar perfil do usuário.");
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const url = userType === "ong" ?
          "https://backend-production-ff4c.up.railway.app/sys/getOngThemes" :
          "https://backend-production-ff4c.up.railway.app/sys/getVoluntaryHabilities";
        const response = await axios.get(url);
        setItems(response.data || []);
      } catch {
        console.error(userType === "ong" ? "Erro ao buscar temas." : "Erro ao buscar habilidades.");
      }
    };

    fetchItems();
  }, [userType]);

  const SubmitEditProfile = async (event) => {
    event.preventDefault();
    const form = event.target;
    const description = form.descricao.value.trim();
    const selectedItems = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.name);

    if (description && selectedItems.length > 0) {
      const userData = userType === "voluntary" ? {
        description: description,
        fullname: fullname  ,
        birthDate: birthDate,
        habilities: selectedItems
      } : {
        description: description,
        ong_name: ongName,
        themes: selectedItems
      };

      try {
        const updateUrl = userType === "ong" ?
          `https://backend-production-ff4c.up.railway.app/ongs/updateOng/${userId}` :
          `https://backend-production-ff4c.up.railway.app/voluntarys/updateVoluntary/${userId}`;

        const token = Cookies.get('token');
        await axios.patch(updateUrl, userData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setFeedbackMessage("Perfil atualizado com sucesso!");
        window.location.reload();
      } catch (e) {
        console.error("Error:", e.response?.data || e.message);
        setFeedbackMessage("Erro ao atualizar o perfil.");
      }
    } else {
      setFeedbackMessage("Por favor, preencha todos os campos corretamente e selecione pelo menos um item.");
    }
  };

  return (
    <form onSubmit={SubmitEditProfile} className="EditProfile">
      {feedbackMessage && <p>{feedbackMessage}</p>}

      {userType === "voluntary" && (
        <>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nome Completo"
            required
          />
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="Data de Nascimento"
            required
          />
        </>
      )}

      {userType === "ong" && (
        <input
          type="text"
          value={ongName}
          onChange={(e) => setOngName(e.target.value)}
          placeholder="Nome da ONG"
          required
        />
      )}

      <textarea name="descricao" placeholder="Descrição" required />

      <div className="Skills">
        {items.map((item, index) => (
          <span key={index}>
            <label htmlFor={item.toLowerCase()}>{item.replace(/_/g, ' ')}</label>
            <input type="checkbox" name={item} id={item.toLowerCase()} />
          </span>
        ))}
      </div>
      <button type="submit">Editar</button>
    </form>
  );
};

export default EditProfile;
