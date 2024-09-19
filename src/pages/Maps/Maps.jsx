import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import axios from 'axios';
import MapsNGO from '../../components/MapsNGO/MapsNGO';
import './Maps.css';

function Maps() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [ongs, setOngs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOng, setSelectedOng] = useState(null);

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
                .get(`https://backend-production-ff4c.up.railway.app/maps/getNearestOngs/${location.latitude}/${location.longitude}/${20}`)
                .then((response) => {
                    console.log("ONGs mais próximas:", response.data);
                    setOngs(response.data);
                })
                .catch((error) => {
                    console.log("Erro ao obter ONGs:", error.message);
                });
        }
    }, [location]);

    const handleSearch = () => {
        if (searchTerm) {
            axios
                .get(`https://backend-production-ff4c.up.railway.app/maps/getAddressFromOng/${searchTerm}`)
                .then((response) => {
                    console.log("Endereços de ONGs:", response.data);
                    setOngs(response.data);
                })
                .catch((error) => {
                    console.log("Erro ao buscar ONGs por nome:", error.message);
                });
        }
    };

    const handleOngClick = (ong) => {
        if (ong.lat && ong.lng) { 
            setSelectedOng(ong);
            setLocation({ latitude: ong.lat, longitude: ong.lng });
        } else {
            console.log("Coordenadas inválidas para a ONG selecionada.");
        }
    };

    if (location.latitude === null || location.longitude === null) {
        return null;
    }

    return (
        <div className='Maps'>
            <Map
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                initialViewState={{
                    longitude: location.longitude,
                    latitude: location.latitude,
                    zoom: 15,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                longitude={location.longitude || 0}
                latitude={location.latitude || 0}
            >
                {ongs.map(ong => (
                    ong.lat && ong.lng ? ( 
                        <Marker
                            key={ong.ongid} 
                            longitude={ong.lng} 
                            latitude={ong.lat} 
                            onClick={() => handleOngClick(ong)}
                        >
                            <div className="marker"></div>
                        </Marker>
                    ) : null
                ))}
            </Map>

            <section className='Near'>
                <input 
                    type="text" 
                    placeholder='Digite o nome da ONG'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar ONG</button>
                <ul>
                    <h2>ONGs encontradas</h2>
                    {ongs.map(ong => (
                        <li key={ong.ongid} onClick={() => handleOngClick(`perfil/${ong.ongid}`)}>
                            <MapsNGO
                                nome={ong.ongname}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Maps;
