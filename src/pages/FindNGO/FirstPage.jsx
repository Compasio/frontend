import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./FirstPage.css";
import Card from "../../components/Card/Card";
import defaultImg from '../../img/defaultImg.png';
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [themes, setThemes] = useState([]);
    const [selectedThemes, setSelectedThemes] = useState([]);
    const [page, setPage] = useState(1);
    const [id, setId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get("https://backend-production-ff4c.up.railway.app/auth/profile", {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('token')}`
                    }
                });
                setId(response.data.id);
            } catch (error) {
                console.error("Erro ao buscar perfil do usuário:", error);
                setError("Erro ao buscar perfil do usuário.");
            }
        };

        fetchUserProfile();

        const fetchThemes = async () => {
            try {
                const themesResponse = await axios.get("https://backend-production-ff4c.up.railway.app/sys/getOngThemes");
                setThemes(themesResponse.data);
            } catch (err) {
                setError("Erro ao buscar temas. Por favor, tente novamente mais tarde.");
            }
        };

        fetchThemes();
    }, []);

    useEffect(() => {
        const fetchOngs = async () => {
            setLoading(true);
            try {
                let cardsResponse;

                if (selectedThemes.length > 0) {
                    const theme = selectedThemes.join(",");
                    cardsResponse = await axios.post(`https://backend-production-ff4c.up.railway.app/ongs/getOngByTheme/${theme}`);
                } else {
                    cardsResponse = await axios.get(`https://backend-production-ff4c.up.railway.app/ongs/getAllOngs/${page}`);
                }

                const formattedData = cardsResponse.data.map(ong => ({
                    id: ong.id,
                    name: ong.ong.ong_name,
                    description: ong.ong.description,
                    profilePicture: defaultImg,
                    themes: ong.ong.themes.join(", ")
                }));

                setCards(formattedData);
                setError("");
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setError("Nenhum resultado encontrado para os temas selecionados.");
                } else {
                    setError("Erro ao buscar ONGs. Por favor, tente novamente mais tarde.");
                }
                console.error("Erro ao buscar ONGs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOngs();
    }, [page, selectedThemes]);

    const handleThemeChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedThemes([...selectedThemes, value]);
        } else {
            setSelectedThemes(selectedThemes.filter(theme => theme !== value));
        }
    };

    const handleProfileRedirect = () => {
        if (id) {
            navigate(`/perfilVoluntario/${id}`);
        } else {
            console.error("User ID is undefined");
        }
    };

    return (
        <div className="FirstPageNGO">
            <header>
                <nav>
                    <span onClick={handleProfileRedirect} className="material-symbols-outlined">account_circle</span>
                    <input type="text" placeholder="Procurar ONG's" />
                    <span onClick={() => navigate('/maps')} className="material-symbols-outlined">location_on</span>
                </nav>
            </header>
            <main>
                <div className="Filter">
                    <select>
                        <option>Selecionar temas</option>
                    </select>
                    <div className="Dropdown">
                        {themes.map((topico, index) => (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    value={topico}
                                    onChange={handleThemeChange}
                                />
                                {topico}
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
                                link={`/ONG/${card.id}`}
                                imgsrc={card.profilePicture}
                                nome={card.name}
                                descricao={card.description}
                                topicos={card.themes}
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

export default FirstPage;
