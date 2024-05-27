// UserLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./css/PartnerRegister.css";
import "./css/compHeader.css";
function PartnerLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
                const response = await axios.post("http://localhost:8000/partnerLogin", {
                hotel_owner:username,
                password
            });

            const partnerID = response.data.partner_data.partnerID;
            const partnerName = response.data.partner_data.hotel_owner;

            sessionStorage.setItem('id',partnerID);
            sessionStorage.setItem('name',partnerName);

            navigate(`/hotelRegister`);
        } catch (error) {
            window.alert("Invalid Details")
            console.error("Error logging in:", error);
        }
    };

    return (
        <div>
            <div className="nav-bar">
                <div className="title"><a href="/" className="title">Zwigato</a></div>


                <div className="user-actions">
                    <a href="/partnerRegister">Register</a>
                </div>
            </div>
            <div className='partner-container'>

                <div className='sub-partner-container'>
                    <h2 className='h1-partner'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type='text'
                                id='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type='password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PartnerLogin;
