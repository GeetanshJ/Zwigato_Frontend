import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HotelRegister() {
    const partnerName = sessionStorage.getItem('name');
    const partnerID = sessionStorage.getItem('id');

    const nav = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [locationID, setLocationID] = useState(0);
    const [locations, setLocations] = useState([]);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const welcomeMessageStyle = {
        fontSize: '24px',
        color:'red',
        fontWeight: 'bold',
        marginTop: '20px',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

    useEffect(() => {
        // Fetch locations from the server
        const fetchLocations = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/location`);
                setLocations(response.data.locate);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchLocations();
    }, [locationID]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('partnerID', partnerID);
        formData.append('name', name);
        formData.append('address', address);
        formData.append('contact_number', contactNumber);
        formData.append('hotel_image', image);
        formData.append('email', email);
        formData.append('locationID', locationID);

        try {
            await axios.post("http://localhost:8000/hotelRegister", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            nav("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className="nav-bar">
                <div className="title"><a href="/" className="title">Zwigato</a></div>
                <div className="user-actions">
                    <a href="/PartnerLogin">Already a Member? Login Here</a>
                </div>
            </div>

            <h2 style={welcomeMessageStyle}>Welcome Mr {partnerName}</h2>

            <div className="partner-container">
                <div className="sub-partner-container">
                    <h1 className='h1-partner'>Register Hotel</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Hotel Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
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
                            <label htmlFor="contactNumber">Contact Number:</label>
                            <input
                                type="text"
                                id="contactNumber"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="locationID">Location:</label>
                            <select
                                id="locationID"
                                value={locationID}
                                onChange={(e) => setLocationID(e.target.value)}
                            >
                                <option value="">Select location</option>
                                {locations.map(location => (
                                    <option key={location.locationID} value={location.locationID}>{location.location_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hotel_image">Images:</label>
                            <input
                                type="file"
                                id="hotel_image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HotelRegister;
