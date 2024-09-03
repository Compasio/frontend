import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FirstPage.css";
import Card from "../../components/Card/Card";
import defaultImg from '../../img/defaultImg.png';
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [themes, setThemes] = useState([]);
    const [theme, setTheme] = useState("");
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
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

                if (theme) {
                    cardsResponse = await axios.post(`https://backend-production-ff4c.up.railway.app/ongs/getOngByTheme/${theme}`)
                } else {
                    cardsResponse = await axios.get(`https://backend-production-ff4c.up.railway.app/ongs/getAllOngs/${page}`);
                }

                const formattedData = cardsResponse.data.map(ong => ({
                    id: ong.id,
                    name: ong.ong.ong_name,
                    description: ong.ong.description,
                    profilePicture: ong.ong.profile_picture || defaultImg,
                    themes: ong.ong.themes.join(", ")
                }));

                setCards(formattedData);
                setError("");
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setError("Nenhum resultado encontrado para o tema selecionado.");
                } else {
                    setError("Erro ao buscar ONGs. Por favor, tente novamente mais tarde.");
                }
                console.error("Erro ao buscar ONGs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOngs();
    }, [page, theme]);

    return (
        <div className="FirstPage">
            <header>
                <nav>
                    <a href="/perfilVoluntario">
                        <span className="material-symbols-outlined">account_circle</span>
                    </a>
                    <input type="text" placeholder="Procurar ONG's" />
                    <span onClick={() => navigate('/maps')} className="material-symbols-outlined">location_on</span>
                </nav>
            </header>
            <main>
                <div className="Filter">
                    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                        <option value="">Todos os temas</option>
                        {themes.map((themeOption, index) => (
                            <option key={index} value={themeOption}>{themeOption}</option>
                        ))}
                    </select>
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
                                temas={card.themes}
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