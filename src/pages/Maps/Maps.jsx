import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MapsNGO from "../../components/MapsNGO/MapsNGO";
import defaultImg from '../../img/defaultImg.png'
import axios from "axios";

const Maps = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [ongs, setOngs] = useState([]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.log("Erro ao obter localização: " + error.message);
                }
            );
        } else {
            console.log("Geolocalização não é suportada pelo seu navegador.");
        }
    }, []);

    useEffect(() => {
        if (location.latitude && location.longitude) {
            axios
                .get(`https://backend-production-ff4c.up.railway.app/maps/getNearestOngs/${location.latitude}/${location.longitude}/${10}`)
                .then((response) => {
                    console.log("ONGs mais próximas:", response.data);
                    setOngs(response.data);
                })
                .catch((error) => {
                    console.log("Erro ao obter ONGs:", error.message);
                });
        }
    }, [location]);

    return (
        <div className="Maps">
            <header>
                <span onClick={() => navigate('/buscarONG')} className="material-symbols-outlined">
                    arrow_back
                </span>
                <h1>Encontrar ONGs em sua região</h1>
                <input placeholder="Procure pelo endereço/nome" type="text" name="" />
            </header>
            <main>
                <section></section>
                <ul>
                    {ongs.map((ong, index) => (
                        <li key={index}>
                            <MapsNGO
                                img={defaultImg}
                                nome={ong.name}
                                descricao={ong.description}
                            />
                            <p>Latitude: {location.latitude}</p>
                            <p>Longitude: {location.longitude}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Maps;
