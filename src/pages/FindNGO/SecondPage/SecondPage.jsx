import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SecondPage.css";
import NGOBanner from "../../../components/Banners/NGOBanner/NGOBanner";
// import SearchPagesGallery from "../../../components/Gallery/SearchPagesGallery/SearchPagesGallery";
import { useParams } from "react-router-dom";

const SecondPage = () => {
    const [ngoData, setNgoData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchNGOData = async () => {
            try {
                const response = await axios.get(`https://backend-production-ff4c.up.railway.app/ongs/getOngById/${id}`);
                setNgoData(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados da ONG:", error);
            }
        };

        fetchNGOData();
    }, [id]);

    if (!ngoData) return <p>Loading...</p>;

    const { ong_name, description, themes, profile_picture = {} } = ngoData;

    return (
        <div className="SecondPage">
            <header>
                <nav>
                    <a href="/buscarONG">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </a>
                    <div>
                        <span className="material-symbols-outlined">supervised_user_circle</span>
                        <h3>{ong_name}</h3>
                    </div>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </nav>
            </header>
            <main>
                <NGOBanner
                    imgsrc={profile_picture || "default-image-url"}
                    descricao={description}
                    nome={ong_name}
                    temas={themes}
                />
            </main>
            {/* <section>
                <SearchPagesGallery
                    img1={gallery_images[0] || "default-image-url"}
                    img2={gallery_images[1] || "default-image-url"}
                    img3={gallery_images[2] || "default-image-url"}
                />
            </section> */}
        </div>
    );
};

export default SecondPage   