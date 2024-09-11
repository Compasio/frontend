import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import defaultImg from '../../img/defaultImg.png';
import "./Search.css";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);
    const [userType, setUserType] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

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
                setError("Erro ao buscar perfil do usuário.");
            }
        };

        fetchUserProfile();
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const url = userType === "ong" ?
                    "https://backend-production-ff4c.up.railway.app/sys/getVoluntaryHabilities" :
                    "https://backend-production-ff4c.up.railway.app/sys/getOngThemes";
                const response = await axios.get(url);
                setItems(response.data || []);
            } catch {
                setError(userType === "ong" ? "Erro ao buscar habilidades." : "Erro ao buscar temas.");
            }
        };

        fetchItems();
    }, [userType]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let url, data = null;
    
                if (name) {
                    url = userType === "ong" ?
                        `https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntarysByName/${name}` :
                        `https://backend-production-ff4c.up.railway.app/ongs/getOngByName/${name}`;
                } else if (selectedItem) {
                    url = userType === "ong" ?
                        "https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntarysByHabilities" :
                        "https://backend-production-ff4c.up.railway.app/ongs/getOngByTheme";
    
                    data = {
                        page: page,
                        [userType === "ong" ? "habilities" : "themes"]: [selectedItem]
                    };
    
                } else {
                    url = userType === "ong" ?
                        `https://backend-production-ff4c.up.railway.app/voluntarys/getAllVoluntarys/${page}` :
                        `https://backend-production-ff4c.up.railway.app/ongs/getAllOngs/${page}`;
                }
    
                const response = await (data ? axios.post(url, data) : axios.get(url));
    
                let formattedData;
    
                // Verificar se a resposta contém a chave "response"
                if (response.data.response) {
                    if (userType === "ong") {
                        formattedData = response.data.response.map(item => ({
                            id: item.id,
                            name: item.voluntary.fullname,
                            description: item.voluntary.description,
                            profilePicture: item.ImageResource?.[0]?.url || defaultImg,
                            items: item.voluntary.habilites.join(", ")
                        }));
                    } else if (userType === "voluntary") {
                        formattedData = response.data.response.map(item => ({
                            id: item.id,
                            name: item.ong.ong_name,
                            description: item.ong.description,
                            profilePicture: item.ImageResource?.[0]?.url || defaultImg,
                            items: item.ong.themes.join(", ")
                        }));
                    }
                } else {
                    // Quando não há a chave "response" e a resposta é uma lista direta
                    if (userType === "ong") {
                        formattedData = (response.data || []).map(item => ({
                            id: item.id,
                            name: item.voluntary.fullname,
                            description: item.voluntary.description,
                            profilePicture: item.ImageResource?.[0]?.url || defaultImg,
                            items: item.voluntary.habilites.join(", ")
                        }));
                    } else if (userType === "voluntary") {
                        formattedData = (response.data || []).map(item => ({
                            id: item.id,
                            name: item.ong.ong_name,
                            description: item.ong.description,
                            profilePicture: item.ImageResource?.[0]?.url || defaultImg,
                            items: item.ong.themes.join(", ")
                        }));
                    }
                }
    
                setCards(formattedData || []);
                setError("");
            } catch (err) {
                console.error("Erro:", err.response?.data || err.message);
                setError(err.response?.status === 404 ? "Nenhum resultado encontrado." : "Erro ao buscar dados.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page, selectedItem, name, userType]);
    

    const handleItemChange = (e) => {
        setSelectedItem(e.target.value);
    };

    const clearFilters = () => {
        setSelectedItem("");
    };

    const handleProfileRedirect = () => {
        navigate(`/perfil/${userId}`);
    };

    return (
        <div className="Search">
            <header>
                <nav>
                    <span onClick={handleProfileRedirect} className="material-symbols-outlined">account_circle</span>
                    <input
                        type="text"
                        placeholder={userType === "ong" ? "Procurar ONGs" : "Procurar voluntários"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {userType === "ong" && <span onClick={() => navigate('/maps')} className="material-symbols-outlined">location_on</span>}
                </nav>
            </header>
            <main>
                <div className="Filter">
                    <select
                        value={selectedItem}
                        onChange={handleItemChange}
                    >
                        <option value="">{userType === "ong" ? "Selecionar habilidades" : "Selecionar temas"}</option>
                        {items.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                    <button onClick={clearFilters}>Limpar filtro</button>
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
                                link={`/perfil/${card.id}`}
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