import React, { useState, useEffect } from "react";
import "./CreateProject.css";
import axios from "axios";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const CreateProject = () => {
    const [ngoList, setNgoList] = useState([]);
    const [ongThemes, setOngThemes] = useState([]);
    const [userType, setUserType] = useState("");
    const [ongId, setOngId] = useState(null);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUserType(decodedToken.userType);
                setOngId(decodedToken.id);
            } catch (error) {
                console.error("Erro ao decodificar o token JWT: ", error);
            }
        }
    }, []);

    useEffect(() => {
        const fetchThemes = async () => {
            try {
                const response = await axios.get('https://backend-production-ff4c.up.railway.app/sys/getOngThemes');
                setNgoList(response.data);
            } catch (error) {
                console.error("Erro ao buscar temas: ", error);
            }
        };

        const fetchOngThemes = async () => {
            try {
                if (ongId) {
                    const response = await axios.get(`https://backend-production-ff4c.up.railway.app/ongs/getOngById/${ongId}`);
                    setOngThemes(response.data.ong.themes);
                }
            } catch (error) {
                console.error("Erro ao buscar temas da ONG: ", error);
            }
        };

        fetchThemes();
        if (userType === "ong" && ongId) {
            fetchOngThemes();
        }
    }, [userType, ongId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.nome.value.trim();
        const description = form.descricao.value.trim();
        const themes = ngoList.filter(theme => form[theme.toLowerCase()]?.checked);

        if (name && description && themes.length > 0) {
            const ngoData = new FormData();
            ngoData.append('project_name', name);
            ngoData.append('description', description);
            themes.forEach(theme => ngoData.append('themes[]', theme));

            try {
                await axios.post('https://backend-production-ff4c.up.railway.app/projects/createProject', ngoData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } catch (error) {
                console.error("Erro ao enviar os dados: ", error);
            }
        } else {
            setFormError("Por favor, preencha todos os campos corretamente e selecione pelo menos uma área.");
        }
    };

    return (
        <div className="CreateProject">
            <form onSubmit={handleSubmit}>
                <h2>Criar projeto</h2>
                {formError && <p className="error">{formError}</p>}
                <input type="text" placeholder="Nome do projeto" name="nome" required />
                <textarea name="descricao" placeholder="Escreva sobre o projeto" required />
                <h3>Quais são as áreas do projeto?</h3>
                {userType === "ong" && ongThemes.length > 0 && (
                    <div className="NGOThemes">
                        <h3>Temas da ONG</h3>
                        {ongThemes.map(theme => (
                            <span key={theme} id={theme}>
                                <label htmlFor={theme.toLowerCase()}>{theme.replace(/_/g, ' ')}</label>
                                <input type="checkbox" name={theme.toLowerCase().replace(/_/g, ' ')} />
                            </span>
                        ))}
                    </div>
                )}

                <div className="Themes">
                    <h3>Outros Temas</h3>
                    {ngoList.filter(theme => !ongThemes.includes(theme)).map(theme => (
                        <span key={theme} id={theme}>
                            <label htmlFor={theme.toLowerCase()}>{theme.replace(/_/g, ' ')}</label>
                            <input type="checkbox" name={theme.toLowerCase().replace(/_/g, ' ')} />
                        </span>
                    ))}
                </div>

                <div className="Buttons">
                    <button type="submit">Criar projeto</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
