import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../src/css/PartnerRegister.css";
import "../src/css/compHeader.css";

function PartnerRegister() {
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState();
    const [owner, setOwner] = useState('');
    const [location, setLocation] = useState([]);

    const handleSubmit = (() => {
        // Implement your submit logic here
    });

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get("http://localhost:8000/location");
                setLocation(response.data.locate);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchLocation();
    }, []);

    return (
        <div>
            <div className="nav-bar">
                <div className="title"><a href="/" className="title">Zwigato</a></div>


                <div className="user-actions">
                    <a href="/PartnerLogin">Already a Member Login Here</a>
                </div>
            </div>

            <div className="partner-container">
                <div className="sub-partner-container">
                <h1 className='h1-partner'>Register </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact Number:</label>
                            <input
                                type="number"
                                id="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="owner">Hotel Owner:</label>
                            <input
                                type="text"
                                id="owner"
                                value={owner}
                                onChange={(e) => setOwner(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location:</label>
                            <select
                                id="location"
                                onChange={(e) => setLocation(e.target.value)}
                                value={location}
                            >
                                {location.map((loc) => (
                                    <option key={loc.locationID} value={loc.locationID}>
                                        {loc.location_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PartnerRegister;
