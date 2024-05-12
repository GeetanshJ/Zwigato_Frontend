import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../src/css/User_Register.css";

const Register = () => {
    const navigate = useNavigate(); // Correct usage of useNavigate
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        try {
            const usernameResponse = await axios.get(`http://localhost:8000/register/users?username=${username}`);
            if (usernameResponse.data.length > 0) {
                setErrorMessage('Username already taken');
                return;
            }

            const emailResponse = await axios.get(`http://localhost:8000/register/users?email=${email}`);
            if (emailResponse.data.length > 0) {
                setErrorMessage('Email already registered');
                return;
            }
            
            const response = await axios.post('http://localhost:8000/register', {
                username,
                email,
                password
            });

            navigate("/"); // Navigate to the desired route after successful registration
        } catch (error) {
            console.error('Error registering user:', error);
            setErrorMessage('An error occurred while registering. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className='register-container'>
                <h2>Register</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
