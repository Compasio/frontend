import React, { useState, useEffect } from 'react';
import Map from 'react-map-gl';
import axios from 'axios';
import MapsNGO from '../../components/MapsNGO/MapsNGO';
import './Maps.css';

function Maps() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [ongs, setOngs] = useState([])

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
            console.log(location.latitude, location.longitude)
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
            />

            <section className='Near'>
                {ongs.map(ong => (
                    <MapsNGO
                        key={ong.id_user}
                        nome={ong.ong_name}
                    />
                ))}
            </section>
        </div>
    );
}

export default Maps;
