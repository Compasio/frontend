import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import axios from 'axios';
import MapsNGO from '../../components/MapsNGO/MapsNGO';
import './Maps.css';

function Maps() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [ongs, setOngs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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
                    if (response.data.length > 0 && response.data[0].lat && response.data[0].lng) {
                        setLocation({
                            latitude: response.data[0].lat,
                            longitude: response.data[0].lng
                        });
                    }
                })
                .catch((error) => {
                    console.log("Erro ao buscar ONGs por nome:", error.message);
                });
        }
    };

    if (location.latitude === null || location.longitude === null) {
        return null;
    }

    return (
        <div className='Maps'>
            <Map
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                viewState={{
                    longitude: location.longitude,
                    latitude: location.latitude,
                    zoom: 15,
                }}
                onMove={(evt) => setLocation({
                    latitude: evt.viewState.latitude,
                    longitude: evt.viewState.longitude
                })}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {ongs.map(ong => (
                    ong.lat && ong.lng ? (
                        <Marker
                            key={ong.ongid}
                            longitude={ong.lng}
                            latitude={ong.lat}
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
                        <li key={ong.ongid}>
                            <MapsNGO name={ong.ongname} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Maps;