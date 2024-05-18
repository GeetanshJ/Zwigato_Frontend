import React from 'react';
import { useState, useEffect } from 'react';
import '../src/css/cart.css';  // Import the CSS file

const Cart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromLocalStorage = () => {
            try {
                const localStorageData = sessionStorage.getItem('cart');
                if (localStorageData) {
                    setData(JSON.parse(localStorageData));
                }
            } catch (error) {
                console.error('Error fetching data from session storage:', error);
            }
        };

        fetchDataFromLocalStorage();
    }, []);

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {data.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <p className="item-name">{item.menu_name}</p>
                        <p className="item-price">Price: ${item.price}</p>
                        <p className="item-quantity">Quantity: {item.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
