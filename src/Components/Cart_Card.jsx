import React, { useState } from 'react';
// import "../css/MenuCart.css";
import { useNavigate } from 'react-router-dom';
function Cart_Card(props) {
    const [quantity, setQuantity] = useState(1);
    const history = useNavigate();

    const addToCart = () => {
        const { menuID, menu_name, price, hotelID } = props.menuItem;
        const userID = localStorage.getItem("userid");
        const totalPrice = quantity * price;
        const cartItem = { userID, menuID, hotelID, quantity, price, totalPrice, menu_name };
        history(`/cart?menuID=${cartItem.menuID}&menu_name=${cartItem.menu_name}&price=${cartItem.price}&quantity=${cartItem.quantity}`);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="hotel-card">
            <div className="hotel-details">
                <h2 className="hotel-name">{props.menuItem.menu_name}</h2>
                <p className="hotel-description">Description: {props.menuItem.description}</p>
                <p className="hotel-price">Price: ${props.menuItem.price}</p>
                <div className="quantity-controls">
                    <button className="quantity-button" onClick={handleDecrement}>-</button>
                    <span className="quantity-display">{quantity}</span>
                    <button className="quantity-button" onClick={handleIncrement}>+</button>
                </div>
                <br />
                <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Cart_Card;
