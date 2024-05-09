// Delivery.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css"; // Import the CSS for react-slick
import "slick-carousel/slick/slick-theme.css"; // Import the theme CSS for react-slick
import "../src/css/compHeader.css";

function Delivery() {
    const [locations, setLocation] = useState([]);
    const [hotels, setHotel] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(1);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get("http://localhost:8000/location");
                setLocation(response.data.locate);
            } catch (err) {
                console.log(err);
            }
        };
        fetchLocation();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response3 = await axios.get("http://localhost:8000/categories");
                setCategories(response3.data.cat);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response1 = await axios.get(
                    `http://localhost:8000/hotel?locationID=${selectedLocation}`
                );
                setHotel(response1.data.hotel);
            } catch (err) {
                console.log(err);
            }
        };

        fetchHotel();
    }, [selectedLocation]);

    const handleLocationChanged = (event) => {
        setSelectedLocation(event.target.value);
    };


    return (
        <div>
            <div className="nav-bar">
                <div className="title"><a href="/" className="title">Zwigato</a></div>

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

            <h1 className="Title_delivery">Inspiration for your first order</h1>

            <div className="categories">
                    {categories.map((cat) => (
                        <div key={cat.categoryID} className="category">
                            <Link to = {`/selectedCategories/${cat.categoryID}`}>
                                <img src={`./${cat.image}`} alt={cat.category_name} />
                                <div className="category-logo">{cat.category_name}</div>
                            </Link>
                        </div>
                    ))}
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

                                    <div className="view-menu">
                                        <Link to={`/menu/${hotel.hotelID}`}>View Menu</Link>
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
