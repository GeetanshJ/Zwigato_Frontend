import React from 'react';
import '../src/css/Home.css'; // Import CSS file for Navbar styling
import order_img from '../src/assets/order_online.png'
import dine_img from '../src/assets/dine.png'

function Navbar() {
    return (
        <div>
            <nav className="main-navbar">
                <div className="navbar-background">

                    <div className="navbar-links">
                        <a href="/partner">Add Hotel</a>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>

                    <div className="navbar-center-text">
                        <h1>Zwigato</h1>
                        <br/>
                        <p>Discover the best food & drinks in India</p>
                    </div>
                </div>
            </nav>



            <div className = "card-delivery" >
                <a href = "/delivery">
                    <div className='card-home'>
                        <img src = {order_img}/>
                        <h2> Order Online</h2>
                        <p>Stay Home and Order Online</p>
                    </div>
                </a>
                <a href = "/">
                    <div className='card-dine'>
                        <img src = {dine_img}/>
                        <h2>Dining</h2>
                        <p>View the Cities favourite Dining Place</p>
                    </div>
                </a>
            </div>
        </div>
        
    );
}

export default Navbar;
