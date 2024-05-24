import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../src/css/User_login.css";
import "../src/css/compHeader.css";

function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/login", {
                username,
                password
            });

            localStorage.setItem("user", response.data.login.username);
            localStorage.setItem("userid", response.data.login.userID);

            console.log(response.data.login.username);

            navigate("/");
        } catch (error) {
            window.alert("Invalid Details");
            console.error("Error logging in:", error);
        }
    };

    return (
        <div>
            <div className="nav-bar">
                <div className="title"><a href="/" className="title">Zwigato</a></div>

                <div className="user-actions">
                    <a href="/register">Register</a>
                </div>
            </div>
            <div className='container'>
                <div className='register-container'>
                    <h2>Login</h2>
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

export default UserLogin;
