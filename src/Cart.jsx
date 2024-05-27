import React, { useEffect, useState } from 'react';
import 'src/css/cart.css';
import { useLocation } from 'react-router-dom';
function Cart(props) {
    const [totalPrice, setTotalPrice] = useState(0);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    const menuID = queryParams.get('menuID');
    const menuName = queryParams.get('menu_name');
    const price = queryParams.get('price');
    const quantity = queryParams.get('quantity');
    useEffect(() => {
        calculateTotalPrice();
    }, [props.cartItems]);

    const calculateTotalPrice = () => {
        if (props.cartItems) {
            let totalPrice = 0;
            props.cartItems.forEach(item => {
                totalPrice += item.price * item.quantity;
            });
            setTotalPrice(totalPrice);
        }
    };

    const removeFromCart = (menuID) => {
        props.removeFromCart(menuID); 
    };

    // Render the cart items
    const renderCartItems = () => {
        if (props.cartItems) {
            return props.cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                    <p className="item-name">{item.menu_name}</p>
                    <p className="item-price">Price: ${item.price}</p>
                    <p className="item-quantity">Quantity: {item.quantity}</p>
                    <p className="item-total-price">Total Price: ${item.price * item.quantity}</p>
                    <button className="delete-button" onClick={() => removeFromCart(item.menuID)}>Delete</button>
                </div>
            ));
        } else {
            return <p>No items in cart</p>;
        }
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {renderCartItems()}
            </div>
            <p>Total Price: ${totalPrice}</p>
            <button className="pay-button" onClick={props.pay}>Pay</button>
        </div>
    );
}

export default Cart;
