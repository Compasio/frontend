import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import defaultImg from '../../img/defaultImg.png'
import "./FirstPage.css";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const FirstPageVoluntary = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [skills, setSkills] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
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

        const fetchSkills = async () => {
            try {
                const skillsResponse = await axios.get("https://backend-production-ff4c.up.railway.app/sys/getVoluntaryHabilities");
                setSkills(skillsResponse.data);
            } catch (err) {
                setError("Erro ao buscar habilidades. Por favor, tente novamente mais tarde.");
            }
        };

        fetchSkills();
    }, []);

    useEffect(() => {
        const fetchVolunteers = async () => {
            setLoading(true);
            try {
                let cardsResponse;

                if (selectedSkills.length > 0) {
                    const skillsQuery = selectedSkills.join(",");
                    cardsResponse = await axios.post(`https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntarysByHabilities`, {
                        skills: skillsQuery,
                        page
                    });
                } else {
                    cardsResponse = await axios.get(`https://backend-production-ff4c.up.railway.app/voluntarys/getAllVoluntarys/${page}`);
                }

                const formattedData = cardsResponse.data.response.map(volunteer => ({
                    id: volunteer.id,
                    name: volunteer.voluntary.fullname,
                    description: volunteer.voluntary.description,
                    profilePicture: volunteer.ImageResource.length > 0 ? volunteer.ImageResource[0].url : defaultImg,
                    habilities: volunteer.voluntary.habilities.join(", ")
                }));

                setCards(formattedData);    
                setError("");
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setError("Nenhum resultado encontrado para as habilidades selecionadas.");
                } else {
                    setError("Erro ao buscar voluntários. Por favor, tente novamente mais tarde.");
                }
                console.error("Erro ao buscar voluntários:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchVolunteers();
    }, [page, selectedSkills]);

    const handleSkillChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedSkills([...selectedSkills, value]);
        } else {
            setSelectedSkills(selectedSkills.filter(skill => skill !== value));
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
        <div className="FirstPageVoluntary">
            <header>
                <nav>
                    <span onClick={handleProfileRedirect} className="material-symbols-outlined">account_circle</span>
                    <input type="text" placeholder="Procurar voluntários" />
                </nav>
            </header>
            <main>
                <div className="Filter">
                    <select>
                        <option>Selecionar habilidades</option>
                    </select>
                    <div className="Dropdown">
                        {skills.map((topico, index) => (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    value={topico}
                                    onChange={handleSkillChange}
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
                                link={`/Voluntario/${card.id}`}
                                imgsrc={card.profilePicture}
                                nome={card.name}
                                descricao={card.description}
                                topicos={card.habilities}
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

export default FirstPageVoluntary;
