import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';
function MenuList() {
    const { hotelID } = useParams();
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/menu/${hotelID}`);
                console.log(hotelID + "hotelID")
                console.log(response.data.menu)
                setMenu(response.data.menu);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
    }, [hotelID]);

    return (
        <div>
            <h2>Menu List</h2>
            <ul>
                {menu.map((menuItem) => (
                    <p key={menuItem.menuID}>
                        {menuItem.menu_name} - ${menuItem.price}
                        <div className="star-rating">
                            {[...Array(menuItem.reviews)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} />
                            ))}
                        </div>
                    </p>
                ))}
            </ul>
        </div>
    );
}

export default MenuList;
