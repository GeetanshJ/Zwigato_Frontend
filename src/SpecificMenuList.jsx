import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Specific_Menu_List() {
    const {locationID, hotelID ,categoryID} = useParams();
    console.log(categoryID,"categoryID specific menu")
    console.log(locationID,"locationID specific menu")
    console.log(hotelID,"hotelID specific menu")

    const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     const fetchMenu = async () => {
    //         try {
                const response =  axios.get(`http://localhost:8000/specificMenu/${locationID}/${hotelID}/${categoryID}`);

                setMenu(response.data.catHotelItemSelected);
    //         } catch (error) {
    //             console.error("Error fetching menu:", error);
    //         }
    //     };

    //     fetchMenu();
    // }, [hotelID,locationID,categoryID]);
    return (
        <div>
            <h2>Menu List</h2>
            <div className="list-hotels">

                {menu.map((menuItem) => (
                    <div className="hotel-card" key={menuItem.menuID}>
                        <div className="hotel-details">
                            <img className="hotel-image" src={`http://localhost:8000/${menuItem.images}`} alt={menuItem.name} />
                            <h2 className="hotel-name">{menuItem.menu_name}</h2>

                            <p className="hotel-address">Description: {menuItem.description}</p>
                            <p className="hotel-contact">Price: {menuItem.price}</p>
                            <p className="hotel-reviews">Reviews:
                                <span className="star-rating">
                                    {[...Array(menuItem.review)].map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} />
                                    ))}
                                </span>
                            </p>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Specific_Menu_List;