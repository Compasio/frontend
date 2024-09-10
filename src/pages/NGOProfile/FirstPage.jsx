import "./FirstPage.css"
import defaultImg from "../../img/defaultImg.png";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FirstPage = () => {
    const { id } = useParams();
    const [ong, setOng] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNGO = async () => {
            try {
                const response = await axios.get(`https://backend-production-ff4c.up.railway.app/ongs/getOngById/${id}`);
                setOng(response.data);
            } catch (error) {
                console.error("Erro ao buscar a ong:", error);
            }
        };
        fetchNGO();
    }, [id]);

    if (!ong) {
        return <div>Carregando...</div>;
    }

    const imgsrc = (ong.ImageResource &&
        ong.ImageResource.length > 0 &&
        ong.ImageResource[0].url) || defaultImg;

    return (
        <div className="FirstPage">
            <header>
                <nav>
                    <span onClick={() => navigate(-1)} className="material-symbols-outlined">
                        arrow_back
                    </span>
                    <h1>Perfil ONG</h1>
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                </nav>
            </header>

            <main>
                <div className="Top">
                    <figure>
                        <img src={imgsrc} alt="" />
                    </figure>
                    <section>
                        <div>
                            <h1>{ong.ong.ong_name}</h1>
                            <p>{ong.ong.description}</p>
                            <p>{ong.ong.themes}</p>
                            {/* <a href="/perfilONG2">
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </a> */}
                        </div>
                        {/* <div>
                            <img src={G1} alt="" />
                            <img src={G2} alt="" />
                        </div> */}
                    </section>
                </div>

                <div className="Bottom">
                    <div className="Options">
                        <h2>Voluntários</h2>
                        <h2>Associados</h2>
                    </div>
                    {/* <div className="Results">
                        <img src={Res1} alt="" />
                        <img src={Res2} alt="" />
                        <img src={Res3} alt="" />
                    </div> */}
                </div>
            </main>
        </div>
    )
}

export default FirstPage