import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker } from 'react-map-gl';
import axios from 'axios';
import MapsNGO from '../../components/MapsNGO/MapsNGO';
import Address from '../../components/Address/Address';
import './Maps.css';

function Maps() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [ongs, setOngs] = useState([]);
    const [searchOngs, setSearchOngs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [page, setPage] = useState(1);
    const [allAddress, setAllAddress] = useState([]);
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

    useEffect(() => {
        const getAllOngs = async () => {
            try {
                const response = await axios.get(
                    `https://backend-production-ff4c.up.railway.app/maps/getAllAddress/${page}`
                );
                setAllAddress(response.data.requests);
            } catch (error) {
                console.log("Erro ao obter ONGs:", error.message);
            }
        };
        getAllOngs();
    }, [page]);

    const handleSearch = async () => {
        if (searchTerm) {
            setIsSearching(true);
            try {
                const response = await axios.get(
                    `https://backend-production-ff4c.up.railway.app/maps/getAddressFromOng/${searchTerm}`
                );
                setSearchOngs(response.data);
                if (response.data.length > 0) {
                    const { lat, lng } = response.data[0];
                    const tolerance = 0.001;
                    if (
                        Math.abs(location.latitude - lat) > tolerance ||
                        Math.abs(location.longitude - lng) > tolerance
                    ) {
                        setLocation({ latitude: lat, longitude: lng });
                    }
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

            <section className='All'>
                <ul>
                    <h2>Todos os endereços de ONGs</h2>
                    {Array.isArray(allAddress) && allAddress.length > 0 ? (
                        allAddress.map(ong => (
                            <li key={ong.id_user}>
                                <Address
                                    name={ong.ong_name}
                                    img={ong.ImageResource && ong.ImageResource.length > 0 ? ong.ImageResource[0].url : null}
                                    city={ong.city}
                                    state={ong.state}
                                    street={ong.street}
                                    num={ong.num}
                                    neighborhood={ong.neighborhood}
                                />
                            </li>
                        ))
                    ) : (
                        <p>Nenhuma ONG encontrada.</p>
                    )}
                    <button onClick={() => setPage(page + 1)}>Carregar mais ONGs</button>
                </ul>
            </section>
        </div>
    );
}

export default Maps;
