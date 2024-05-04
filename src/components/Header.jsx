import React from "react";
import "../CSS/compHeader.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';



function Header() {

    const [locations, setLocation] = useState([]);
    const [hotels, setHotel] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(0);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = axios.get("http://localhost:8000/location");
                setLocation((await response).data.locate)

            }

            catch (err) {
                console.log(err);
            }
        };
        fetchLocation();
    }, [])


    useEffect(() => {
        const fetchHotel = async () => {
            const response1 = await axios.get(`http://localhost:8000/hotel?locationID=${selectedLocation}`)
            // console.log(response1)
            setHotel(response1.data.hotel)
        };

        fetchHotel();
    }, [selectedLocation]);


    const handleLocationChanged = (event) => {
        setSelectedLocation(event.target.value)
    };

    return (
        <div>
            <div className="nav-bar">
                <div className="title">Zwigato</div>

                <div className="location" >
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: 'white', fontSize: "30px", paddingRight: "10px" }} />

                    <select onChange={handleLocationChanged} value={selectedLocation}>
                        {locations.map((location) => (
                            <option key={location.locationID} value={location.locationID}>{location.location_name}</option>
                        ))}
                    </select>
                </div>

                <div className="user-actions">
                    <div className="login">Login</div>
                    <div className="register">Register</div>
                </div>

            </div>

            <div className="list-hotels">
                {hotels.map((hotel) => (
                    <div key={hotel.hotelID}>
                        <div>Name: {hotel.name}</div>
                        <div>Address: {hotel.address}</div>
                        <div>Contact Number: {hotel.contact_number}</div>
                        <div>Location ID: {hotel.locationID}</div>
                        <div>Reviews: {hotel.reviews}</div>
                        <img src={hotel.images} alt={hotel.name} />
                        <div>Category ID: {hotel.categoryID}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Header;
