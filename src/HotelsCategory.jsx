import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

function Hotels_Category() {
    const { locationID, categoryID } = useParams();
    console.log(locationID, "location");
    console.log(categoryID, "categoryID");


    const [cat, setCat] = useState([]);
    useEffect(() => {
        const fetchCat = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/selectedCategories/${locationID}/${categoryID}`);
                setCat(response.data.catSelected);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchCat();
    }, [categoryID, locationID]);
    return (
        <div>


            <div className="hotel-details">
                {
                    cat.length > 0 && (
                        <div className="list-hotels">
                            {cat.map((hotel) => (
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
                                            <Link to={`/specificMenu/${locationID}/${hotel.hotelID}/${categoryID}`}>View Menu</Link>
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

export default Hotels_Category;