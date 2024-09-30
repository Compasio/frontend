import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/Banners/SideBanner/SideBanner";
import axios from "axios";
import "./VoluntaryRegister.css";

const VoluntaryRegister = () => {
    const [firstInputsFilled, setFirstInputsFilled] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [habilitiesList, setHabilitiesList] = useState([]);
    const [fileError, setFileError] = useState("");
    const [formError, setFormError] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHabilities = async () => {
            try {
                const response = await axios.get('https://backend-production-ff4c.up.railway.app/sys/getVoluntaryHabilities');
                setHabilitiesList(response.data);
            } catch (error) {
                console.error("Houve um erro ao buscar habilidades: ", error);
            }
        };
        fetchHabilities();
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

    const validateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        const age = today.getFullYear() - birth.getFullYear();
        const monthDifference = today.getMonth() - birth.getMonth();
        return (age > 18 && age < 65) || (age === 18 && monthDifference >= 0) || (age === 65 && monthDifference <= 0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullname = form.nome.value.trim();
        const birthDate = form.data_nascimento.value.trim();
        const cpf_voluntary = form.cpf.value.trim();
        const email = form.email.value.trim();
        const password = form.senha.value.trim();
        const file = form.foto.files[0];
        const confirmPassword = form.senha_confirmacao.value.trim();

        if (fullname && cpf_voluntary && birthDate && email && password && confirmPassword && password === confirmPassword && file && validateAge(birthDate)) {
            const userData = new FormData();
            userData.append('fullname', fullname);
            userData.append('birthDate', birthDate);
            userData.append('cpf_voluntary', cpf_voluntary);
            userData.append('email', email);
            userData.append('password', password);
            userData.append('file', file);

            setUserDetails(userData);
            setFirstInputsFilled(true);
            setFormError("");
        } else {
            setFormError("Por favor, preencha todos os campos corretamente, verifique a confirmação da senha, selecione uma foto de perfil e tenha entre 18 e 65 anos.");
        }
    };

    const handleFinalSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const description = form.descricao.value.trim();
        const habilities = habilitiesList.filter(hability => form[hability.toLowerCase()]?.checked);

        if (description && habilities.length > 0) {
            const userData = new FormData();
            userData.append('fullname', userDetails.get('fullname'));
            userData.append('birthDate', userDetails.get('birthDate'));
            userData.append('cpf_voluntary', userDetails.get('cpf_voluntary'));
            userData.append('email', userDetails.get('email'));
            userData.append('password', userDetails.get('password'));
            userData.append('file', userDetails.get('file'));
            userData.append('description', description);
            habilities.forEach(hability => userData.append('habilities[]', hability));

            try {
                await axios.post('https://backend-production-ff4c.up.railway.app/voluntarys/createVoluntary', userData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
                navigate("/autenticacaoDe2Fatores?tipo=voluntario");
            } catch (error) {
                console.error("Erro ao enviar os dados: ", error);
            }
        } else {
            setFormError("Por favor, preencha todos os campos corretamente e selecione pelo menos uma área.");
        }
    };

    const handleBack = () => {
        setFirstInputsFilled(false);
    };

    return (
        <div className="VoluntaryRegister">
            <section>
                {firstInputsFilled ? (
                    <form onSubmit={handleFinalSubmit}>
                        <h2>Crie sua conta!</h2>
                        <textarea name="descricao" placeholder="Fale um pouco sobre você" required />
                        <h3>Quais são suas habilidades?</h3>
                        <div className="Skills">
                            {habilitiesList.map(hability => (
                                <span key={hability} id={hability}>
                                    <label htmlFor={hability.toLowerCase()}>{hability.replace(/_/g, ' ')}</label>
                                    <input type="checkbox" name={hability.toLowerCase()} />
                                </span>
                            ))}
                        </div>
                        <div className="Buttons">
                            <button type="button" onClick={handleBack}>Voltar</button>
                            <button type="submit">Criar Conta</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>Crie sua conta!</h2>
                        <input type="text" placeholder="Nome completo" name="nome" required />
                        <input type="date" name="data_nascimento" required />
                        <input type="text" placeholder="CPF (apenas números)" name="cpf" required />
                        <input type="email" placeholder="Email" name="email" required />
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
                            {!profileImage && <span class="material-symbols-outlined">
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

export default VoluntaryRegister;
