import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "../src/css/cart.css";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchDataFromLocalStorage = () => {
            try {
                const userData = localStorage.getItem('userid');
                if (userData) {
                    const userId = JSON.parse(userData).id;
                    const cartData = sessionStorage.getItem(`cart_${userId}`);
                    if (cartData) {
                        setCart(JSON.parse(cartData));
                    }
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchDataFromLocalStorage();
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        const userData = localStorage.getItem('userid');
        if (userData) {
            const userId = JSON.parse(userData).userID;
            sessionStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
        }
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <p className="item-name">{item.menu_name}</p>
                        <p className="item-price">Price: ${item.price}</p>
                        <p className="item-quantity">Quantity: {item.count}</p>
                        <FontAwesomeIcon icon={faTrash} onClick={() => removeFromCart(index)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
