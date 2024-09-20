import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker } from 'react-map-gl';
import axios from 'axios';
import MapsNGO from '../../components/MapsNGO/MapsNGO';
import './Maps.css';

function Maps() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [ongs, setOngs] = useState([]);
    const [searchOngs, setSearchOngs] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false); 
    const locationRef = useRef(location);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    locationRef.current = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
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
        const fetchOngs = async () => {
            if (location.latitude && location.longitude && !isSearching) {
                try {
                    const response = await axios.get(
                        `https://backend-production-ff4c.up.railway.app/maps/getNearestOngs/${location.latitude}/${location.longitude}/${20}`
                    );
                    setOngs(response.data);
                } catch (error) {
                    console.log("Erro ao obter ONGs:", error.message);
                }
            }
        };
        fetchOngs();
    }, [location, isSearching]); 

    const handleSearch = async () => {
        if (searchTerm) {
            setIsSearching(true); 
            try {
                const response = await axios.get(
                    `https://backend-production-ff4c.up.railway.app/maps/getAddressFromOng/${searchTerm}`
                );
                setSearchOngs(response.data); 
                if (response.data.length > 0 && response.data[0].lat && response.data[0].lng) {
                    setLocation({
                        latitude: response.data[0].lat,
                        longitude: response.data[0].lng
                    });
                }
            } catch (error) {
                console.log("Erro ao buscar ONGs por nome:", error.message);
            } finally {
                setIsSearching(false);
            }
        }
    };

    const handleMove = (evt) => {
        const { latitude, longitude } = evt.viewState;

        const tolerance = 0.0001;

        if (
            Math.abs(locationRef.current.latitude - latitude) > tolerance ||
            Math.abs(locationRef.current.longitude - longitude) > tolerance
        ) {
            setLocation({ latitude, longitude });
            locationRef.current = { latitude, longitude };
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
                onMove={handleMove}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {(searchOngs.length > 0 ? searchOngs : ongs).map(ong => ( 
                    ong.lat && ong.lng ? (
                        <Marker
                        key={ong.ongid}
                        longitude={ong.lng}
                        latitude={ong.lat}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="red" />
                        </svg>
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
                    {(searchOngs.length > 0 ? searchOngs : ongs).map(ong => ( 
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
