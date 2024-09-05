import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./VoluntaryProfile.css";
import defaultImg from "../../img/defaultImg.png";
import VoluntaryProfileBanner from "../../components/Banners/VoluntaryProfileBanner/VoluntaryProfileBanner";

const VoluntaryProfile = () => {
    const { id } = useParams();
    const [voluntary, setVoluntary] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVoluntary = async () => {
            try {
                const response = await axios.get(`https://backend-production-ff4c.up.railway.app/voluntarys/getVoluntaryById/${id}`);
                setVoluntary(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Erro ao buscar o voluntário:", error);
            }
        };

        fetchVoluntary();
    }, [id]);

    if (!voluntary) {
        return <div>Carregando...</div>;
    }

    const imgsrc = (voluntary.ImageResource && 
                    voluntary.ImageResource.length > 0 &&
                    voluntary.ImageResource[0].url) || defaultImg;

    return (
        <div className="VoluntaryProfile">
            <header>
                <nav>
                    <span onClick={() => navigate(-1)} className="material-symbols-outlined">
                        arrow_back
                    </span>
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                </nav>
            </header>

            <section>
                <VoluntaryProfileBanner
                    imgsrc={imgsrc}
                    nome={voluntary.voluntary.fullname}
                    datanasc={voluntary.voluntary.birthDate}
                    desc={voluntary.voluntary.description}
                    areadeatuacao={voluntary.voluntary.habilities}
                />
            </section>
        </div>
    );
}

export default VoluntaryProfile;
