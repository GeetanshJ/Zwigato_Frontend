import React from "react";
import "../src/css/compHeader.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

function Delivery() {
    const [locations, setLocation] = useState([]);
    const [hotels, setHotel] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(11);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = axios.get("http://localhost:8000/location");
                setLocation((await response).data.locate);
            } catch (err) {
                console.log(err);
            }
        };
        fetchLocation();
    }, []);

    useEffect(() => {
        const fetchHotel = async () => {
            const response1 = await axios.get(
                `http://localhost:8000/hotel?locationID=${selectedLocation}`
            );
            console.log(response1.data.hotel.map(hotel => hotel.images));
            setHotel(response1.data.hotel);
        };

        fetchHotel();
    }, [selectedLocation]);

    const handleLocationChanged = (event) => {
        setSelectedLocation(event.target.value);
    };

    return (
        <div>
            <div className="nav-bar">
                <div className="title">Zwigato</div>

                <div className="location">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "white", fontSize: "30px", paddingRight: "10px" }}
                    />

                    <select onChange={handleLocationChanged} value={selectedLocation}>
                        {locations.map((location) => (
                            <option key={location.locationID} value={location.locationID}>
                                {location.location_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="user-actions">
                    <div className="login">Login</div>
                    <div className="register">Register</div>
                </div>
            </div>
            <div className="hotel-details">
                {hotels.length > 0 && (
                    <div className="list-hotels">
                        {hotels.map((hotel) => (

                            <div className="hotel-card" key={hotel.hotelID}>

                                <div className="hotel-details">
                                    <img className="hotel-image" src={`http://localhost:8000/${hotel.images}`} alt={hotel.name} />
                                    <h2 className="hotel-name">{hotel.name}</h2>
                                    <p className="hotel-address">Address: {hotel.address}</p>
                                    <p className="hotel-contact">Contact Number: {hotel.contact_number}</p>
                                    <p className="hotel-reviews">Reviews:
                                        <span className="star-rating">
                                            {[...Array(hotel.reviews)].map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </span>
                                    </p>
                                    <p className="hotel-contact"> {hotel.category_name}</p>

                                    <div>
                                        <Link to={`menu/${hotel.hotelID}`}>View Menu</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Delivery;
