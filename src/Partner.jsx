// Page.jsx

import React from 'react';
// import '../src/css/Partner.css';

function Add_Hotel() {
    return (
        <div>
            <div className="partner-section">
                <h2>Partner with Zwigato</h2>
                <h2>Partner with Zwigato at 0% commission for the 1st month!</h2>
                <p>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
                <a href = "/partnerRegister">Register your restaurant</a>
                <a href = "/partnerLogin">Login to view your existing restaurants</a>
                <p>Need help? Contact +91 97-38-38-38-38</p>
            </div>

            <div className="page">


                <div className='card-partner'>
                    <h1>Get started with online ordering</h1>
                    <h1>Please keep the documents ready for a smooth signup</h1>
                    <ul>
                        <li>&#10003; FSSAI license copy (apply now)</li>
                        <li>&#10003; PAN card copy</li>
                        <li>&#10003; Regular GSTIN (apply now)</li>
                        <li>&#10003; Bank account details</li>
                        <li>&#10003; Your restaurant menu</li>
                        <li>&#10003; Dish images for top 5 items</li>
                    </ul>
                </div>

                <div className='why-zomato'>
                    <h1>Why should you partner with Zwiato?</h1>
                    <h3>Zwigato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</h3>
                    <div>
                        <p>1000+ cities</p>
                        <p>in India</p>
                    </div>
                    <div>
                        <p>3 lakh+</p>
                        <p>restaurant listings</p>
                    </div>
                    <div>
                        <p>5.0 crore+</p>
                        <p>monthly orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add_Hotel;
