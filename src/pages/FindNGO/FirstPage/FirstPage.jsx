import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FirstPage.css";
import Card from "../../../components/Card/Card";
import defaultImg from '../../../img/defaultImg.png'
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const maps = () => {
        navigate('/maps');
    };

    useEffect(() => {
        const fetchCardsData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://backend-production-ff4c.up.railway.app/ongs/getAllOngs/${currentPage}`);
                const formattedData = response.data.map(ong => ({
                    id: ong.id,
                    name: ong.ong.ong_name,
                    description: ong.ong.description,
                    profilePicture: ong.ong.profile_picture || defaultImg,
                    themes: ong.ong.themes.join(", ")
                }));

                setCardsData(formattedData);
                setLoading(false);
            } catch (err) {
                console.error("Erro ao buscar dados dos cartões:", err);
                setError("Erro ao buscar dados. Por favor, tente novamente mais tarde.");
                setLoading(false);
            }
        };

        fetchCardsData();
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="FirstPage">
            <header>
                <nav>
                    <a href="/perfilVoluntario">
                        <span className="material-symbols-outlined">
                            account_circle
                        </span>
                    </a>
                    <input type="text" placeholder="Procurar ONG's" />
                    <span onClick={maps} className="material-symbols-outlined">
                        location_on
                    </span>
                </nav>
            </header>
            <main>
                <div className="Buttons">
                    <button type="button">Animais</button>
                    <button type="button">Crianças</button>
                    <button type="button">Idosos</button>
                    <button type="button">Deficientes</button>
                    <button type="button">Adolescentes</button>
                </div>
                <div className="Cards">
                    {loading ? (
                        <p>Carregando...</p>
                    ) : error ? (
                        <p style={{ color: "red" }}>{error}</p>
                    ) : (
                        cardsData.map(card => (
                            <Card
                                key={card.id}
                                link={`/ONG/${card.id}`}
                                imgsrc={card.profilePicture}
                                descricao={card.description}
                                temas={card.themes}
                            />
                        ))
                    )}
                </div>
            </main>
            <footer>
                <span className="material-symbols-outlined" onClick={handlePreviousPage}>
                    arrow_back
                </span>
                <span className="material-symbols-outlined" onClick={handleNextPage}>
                    arrow_forward
                </span>
            </footer>
        </div>
    );
};

export default FirstPage;
