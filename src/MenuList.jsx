import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import "../src/css/cart.css"
function MenuList() {
    
    const { hotelID } = useParams();
    const [menu, setMenu] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantities, setQuantities] = useState({});

    const addToCart = (menuItem) => {
        try {
            // const existingData = sessionStorage.getItem('cart');
            // const count = quantities[menuItem.menuID] || 1;
            // menuItem.count = count;
            // const dataArray = existingData ? JSON.parse(existingData) : [];
            // dataArray.push(menuItem);
            // const updatedData = JSON.stringify(dataArray);
            // sessionStorage.setItem('cart', updatedData);
            setCart(menuItem);
            
            window.alert("Item Added to Cart Successfully");
            console.log('Data added to session storage successfully.');
        } catch (error) {
            console.error('Error adding data to session storage:', error);
        }
    }

    const handleAddToCart = (menuItem) => {
        if (!localStorage.getItem("user")) {
            window.alert("Please login first.");
        } else {
            addToCart(menuItem);
        }
    };

    const handleIncrement = (menuID) => {

        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [menuID]: (prevQuantities[menuID] || 1) + 1,
        }));
    };

    const handleDecrement = (menuID) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [menuID]: Math.max((prevQuantities[menuID] || 1) - 1, 1),
        }));
    };

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
                    <div className="hotel-card" key={menuItem.menuID}>
                        <div className="hotel-details">
                            <img className="hotel-image" src={`http://localhost:8000/${menuItem.images}`} alt={menuItem.menu_name} />
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
                            <div className="quantity-controls">
                                <button className="quantity-button" onClick={() => handleDecrement(menuItem.menuID)}>-</button>
                                <span className="quantity-display">{quantities[menuItem.menuID] || 1}</span>
                                <button className="quantity-button" onClick={() => handleIncrement(menuItem.menuID)}>+</button>
                            </div>
                            <br />
                            <button onClick={() => handleAddToCart(menuItem)}> Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuList;
