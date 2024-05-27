import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import "./src/css/cart.css"
import Cart_Card from "./Components/Cart_Card";
function MenuList() {



    const { hotelID } = useParams();
    const [menu, setMenu] = useState([]);




    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/menu/${hotelID}`);
                setMenu(response.data.menu);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
    }, [hotelID]);

    return (
        <div>
            <div className="nav-bar">
                <div className="title"><a href="/" className="title">Zwigato</a></div>
                <a href="/cart" style={{ fontSize: '20px', textDecoration: 'none', color: 'white' }}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </a>

            </div>
            <br />
            <h2>Menu List</h2>
            <br />
            <div className="list-hotels">
                {menu.map((menuItem) => (
                    <Cart_Card menuItem={menuItem}/>
            
                ))}
            </div>
        </div>
    );
}

export default MenuList;
