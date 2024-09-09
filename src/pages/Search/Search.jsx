import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import defaultImg from '../../img/defaultImg.png';
import "./Search.css";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);
    const [userType, setUserType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                await axios.get("https://backend-production-ff4c.up.railway.app/auth/profile", {
                    headers: { 'Authorization': `Bearer ${Cookies.get('token')}` }
                });
                setUserType(Cookies.get('userType'));
            } catch (error) {
                setError("Erro ao buscar perfil do usuário.");
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
                setItems(response.data);
            } catch {
                setError(userType === "ong" ? "Erro ao buscar temas." : "Erro ao buscar habilidades.");
            }
        };

        if (userType) fetchItems();
    }, [userType]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let url, data;
                if (name) {
                    url = userType === "ong" ?
                        `https://backend-production-ff4c.up.railway.app/ongs/getOngByName/${name}` :
                        `https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntarysByName/${name}`;
                } else if (selectedItems.length) {
                    url = userType === "ong" ?
                        "https://backend-production-ff4c.up.railway.app/ongs/getOngByTheme" :
                        "https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntarysByHabilities";
                    data = { [userType === "ong" ? "themes" : "hability"]: selectedItems, page };
                } else {
                    url = userType === "ong" ?
                        `https://backend-production-ff4c.up.railway.app/ongs/getAllOngs/${page}` :
                        `https://backend-production-ff4c.up.railway.app/voluntarys/getAllVoluntarys/${page}`;
                }

                const response = await (data ? axios.post(url, data) : axios.get(url));
                const formattedData = response.data.response.map(item => ({
                    id: item.id,
                    name: userType === "ong" ? item.ong.ong_name : item.voluntary.fullname,
                    description: userType === "ong" ? item.ong.description : item.voluntary.description,
                    profilePicture: item.ImageResource[0]?.url || defaultImg,
                    items: (userType === "ong" ? item.ong.themes : item.voluntary.habilities).join(", ")
                }));
                setCards(formattedData);
                setError("");
            } catch (err) {
                setError(err.response?.status === 404 ? "Nenhum resultado encontrado." : "Erro ao buscar dados.");
            } finally {
                setLoading(false);
            }
        };

        if (userType) fetchData();
    }, [page, selectedItems, name, userType]);

    const handleItemChange = (e) => {
        const { value, checked } = e.target;
        setSelectedItems(prev => checked ? [...prev, value] : prev.filter(item => item !== value));
    };

    const handleProfileRedirect = () => {
        navigate(`/perfil${userType === "ong" ? "Ong" : "Voluntario"}/${Cookies.get('id')}`);
    };

    return (
        <div className="Search">
            <header>
                <nav>
                    <span onClick={handleProfileRedirect} className="material-symbols-outlined">account_circle</span>
                    <input
                        type="text"
                        placeholder={userType === "ong" ? "Procurar voluntários" : "Procurar ONGs"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {userType === "ong" && <span onClick={() => navigate('/maps')} className="material-symbols-outlined">location_on</span>}
                </nav>
            </header>
            <main>
                <div className="Filter">
                    <select
                        value=""
                        onChange={(e) => handleItemChange({ target: { value: e.target.value, checked: e.target.value } })}
                    >
                        <option value="">{userType === "ong" ? "Selecionar temas" : "Selecionar habilidades"}</option>
                        {items.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <div className="Dropdown">
                        {userType === "ong" && items.map((item, index) => (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={selectedItems.includes(item)}
                                    onChange={handleItemChange}
                                />
                                {item}
                            </label>
                        ))}
                        {userType === "voluntary" && items.map((item, index) => (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={selectedItems.includes(item)}
                                    onChange={handleItemChange}
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="Cards">
                    {loading ? (
                        <p>Carregando...</p>
                    ) : error ? (
                        <p style={{ color: "red" }}>{error}</p>
                    ) : (
                        cards.map(card => (
                            <Card
                                key={card.id}
                                link={`/${userType === "ong" ? "Voluntario" : "ONG"}/${card.id}`}
                                imgsrc={card.profilePicture}
                                nome={card.name}
                                descricao={card.description}
                                topicos={card.items}
                            />
                        ))
                    )}
                </div>
            </main>
            <footer>
                <span className="material-symbols-outlined" onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}>
                    arrow_back
                </span>
                <span className="material-symbols-outlined" onClick={() => setPage(prevPage => prevPage + 1)}>
                    arrow_forward
                </span>
            </footer>
        </div>
    );
};

export default Search;
