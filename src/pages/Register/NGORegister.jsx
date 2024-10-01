import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import axios from "axios";
import "./NGORegister.css";

const NGORegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const [ngoDetails, setNgoDetails] = useState({});
    const [ngoList, setNgoList] = useState([]);
    const [fileError, setFileError] = useState("");
    const [formError, setFormError] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchThemes = async () => {
            try {
                const response = await axios.get('https://backend-production-ff4c.up.railway.app/sys/getOngThemes');
                setNgoList(response.data);
            } catch (error) {
                console.error("Erro ao buscar temas: ", error);
            }
        };
        fetchThemes();
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type;
            if (!['image/jpeg', 'image/png'].includes(fileType)) {
                setFileError('Apenas arquivos .jpg, .jpeg e .png são permitidos.');
                event.target.value = null;
            } else {
                setFileError('');
                const reader = new FileReader();
                reader.onloadend = () => {
                    setProfileImage(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.nome.value.trim();
        const cnpj = form.cnpj.value.trim();
        const cpf = form.cpf.value.trim();
        const email = form.email.value.trim();
        const password = form.senha.value.trim();
        const confirmPassword = form.senha_confirmacao.value.trim();
        const file = form.foto.files[0];

        if (name && cnpj && cpf && email && password && confirmPassword && password === confirmPassword && file) {
            const ngoData = new FormData();
            ngoData.append('ong_name', name);
            ngoData.append('cnpj_ong', cnpj);
            ngoData.append('email', email);
            ngoData.append('cpf_founder', cpf);
            ngoData.append('password', password);
            ngoData.append('file', file);

            setNgoDetails(ngoData);
            setFirstInputsFilled(true);
            setFormError("");
        } else {
            setFormError("Por favor, preencha todos os campos corretamente, verifique a confirmação da senha e selecione uma foto de perfil.");
        }
    };

    const handleFinalSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const description = form.descricao.value.trim();
        const themes = ngoList.filter(theme => form[theme.toLowerCase()]?.checked);

        if (description && themes.length > 0) {
            const ngoData = new FormData();
            ngoData.append('ong_name', ngoDetails.get('ong_name'));
            ngoData.append('cnpj_ong', ngoDetails.get('cnpj_ong'));
            ngoData.append('email', ngoDetails.get('email'));
            ngoData.append('cpf_founder', ngoDetails.get('cpf_founder'));
            ngoData.append('password', ngoDetails.get('password'));
            ngoData.append('file', ngoDetails.get('file'));
            ngoData.append('description', description);
            themes.forEach(theme => ngoData.append('themes[]', theme));

            try {
                await axios.post('https://backend-production-ff4c.up.railway.app/ongs/createOng', ngoData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                navigate("/autenticacaoDe2Fatores?tipo=ong");
            } catch (error) {
                console.error("Erro ao enviar os dados: ", error);
            }
        } else {
            setFormError("Por favor, preencha todos os campos corretamente e selecione pelo menos uma área.");
        }
    };

    return (
        <div className="NGORegister">
            <section>
                {firstInputsFilled ? (
                    <form onSubmit={handleFinalSubmit}>
                        <h2>Crie sua Organização!</h2>
                        <textarea name="descricao" placeholder="Escreva sobre sua ONG" required />
                        <h3>Quais são as áreas da sua ONG?</h3>
                        <div className="Skills">
                            {ngoList.map(theme => (
                                <span key={theme} id={theme}>
                                    <label htmlFor={theme.toLowerCase()}>{theme}</label>
                                    <input type="checkbox" name={theme.toLowerCase().replace(/_/g, ' ')} />
                                </span>
                            ))}
                        </div>
                        <div className="Buttons">
                            <button type="button" onClick={() => setFirstInputsFilled(false)}>Voltar</button>
                            <button type="submit">Criar Conta</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>Crie sua Organização!</h2>
                        <input type="text" placeholder="Nome da ONG" name="nome" required />
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="text" placeholder="CNPJ (apenas números)" name="cnpj" required />
                        <input type="text" placeholder="CPF do fundador (apenas números)" name="cpf" required />
                        <input type="password" placeholder="Senha (min: 8, 1 simbolo, 1 número e 1 letra maiúscula)" name="senha" required />
                        <input type="password" placeholder="Confirme sua senha" name="senha_confirmacao" required />
                        <input
                            name="foto"
                            required
                            type="file"
                            onChange={handleFileChange}
                            id="profilePictureInput"
                        />
                        <label htmlFor="profilePictureInput" className="ProfilePicture" style={{ backgroundImage: `url(${profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {!profileImage && <span className="material-symbols-outlined">
                                account_circle
                            </span>}
                        </label>
                        {fileError && <p className="error">{fileError}</p>}
                        {formError && <p className="error">{formError}</p>}
                        <div className="Buttons">
                            <button type="submit">Continuar</button>
                        </div>
                    </form>
                )}
            </section>
            <SideBanner />
        </div>
    );
};

export default NGORegister;
