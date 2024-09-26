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
    const [hasMoreOngs, setHasMoreOngs] = useState(true);
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

    const getAllOngs = async (currentPage) => {
        try {
            const response = await axios.get(
                `https://backend-production-ff4c.up.railway.app/maps/getAllAddress/${currentPage}`
            );

            if (response.data.requests.length > 0) {
                setAllAddress(response.data.requests);
                setHasMoreOngs(true);
            } else {
                setHasMoreOngs(false);
            }
        } catch (error) {
            console.log("Erro ao obter ONGs:", error.message);
        }
    };

    useEffect(() => {
        getAllOngs(page);
    }, [page]);

    const handleNextPage = () => {
        if (hasMoreOngs) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleSearch = async () => {
        const cleanSearchTerm = searchTerm.trim();
        if (cleanSearchTerm) {
            setIsSearching(true);
            try {
                const response = await axios.get(
                    `https://backend-production-ff4c.up.railway.app/maps/getAddressFromOng/${cleanSearchTerm}`
                );
                if (response.data && Array.isArray(response.data.address)) {
                    setSearchOngs(response.data.address);
                } else {
                    setSearchOngs([]);
                }
            } catch (error) {
                console.log("Erro ao buscar ONGs por nome:", error.message);
            } finally {
                setIsSearching(false);
            }
        }
    };


    const goToLocation = (lat, lng) => {
        setLocation({ latitude: lat, longitude: lng });
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
                            color="red"
                        />
                    ) : null
                ))}
            </Map>

            <section className='Near'>
                <input
                    type="text"
                    placeholder='Pesquise o nome da ONG'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar ONG</button>
                <ul>
                    {searchOngs.map(ong => (
                        <li key={ong.ongid}>
                            <MapsNGO
                                picture={ong.profilePic}
                                name={ong.ongname}
                                description={ong.description}
                                themes={ong.themes.join(', ').replace(/_/g, ' ')}
                                lat={ong.lat}
                                lng={ong.lng}
                                func={() => goToLocation(ong.lat, ong.lng)}
                            />

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
                                    img={ong.profilePic}
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
                </ul>
                <div className='Options'>
                    <button
                        onClick={handlePreviousPage}
                        disabled={page === 1}
                    >
                        Página Anterior
                    </button>
                    {hasMoreOngs && (
                        <button onClick={handleNextPage}>Próxima Página</button>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Maps;