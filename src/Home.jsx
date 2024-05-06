import React from 'react';
import '../src/css/Home.css'; // Import CSS file for Navbar styling

function Navbar() {
    return (
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
    );
}

export default Navbar;
