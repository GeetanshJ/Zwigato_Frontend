import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/css/profile.css';

function Profile() {
    const [userData, setUserData] = useState({ username: '', password: '', email: '' });

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const userID = localStorage.getItem("userid");
            const response = await axios.get(`http://localhost:8000/users/${userID}`);
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userID = localStorage.getItem("userid");
            await axios.post(`http://localhost:8000/users/${userID}`, userData);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="form-container">
            <div className="welcome-message">
                <h2>Welcome {userData.username}</h2>
            </div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={userData.email} onChange={handleChange} />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default Profile;
