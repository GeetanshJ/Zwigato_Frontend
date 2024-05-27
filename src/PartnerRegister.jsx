import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
// import "../src/css/PartnerRegister.css";
// import "../src/css/compHeader.css";

function PartnerRegister() {
    const nav = useNavigate();

    const [owner, setOwner] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:8000/partnerRegister",{
                owner,password
            })

            nav("/partnerLogin");
            
            console.log(response.data)

        }

        catch(err){
            if(owner === '' || password === '' ){
                window.alert("Enter details")
            }
            else{
                window.alert("username  present")
            }
        }

    
    };


    return (
        <div>
            <div className="nav-bar">
                <div className="title"><a href="/" className="title">Zwigato</a></div>


                <div className="user-actions">
                    <a href="/partnerLogin">Already a Member Login Here</a>
                </div>
            </div>

            <div className="partner-container">
                <div className="sub-partner-container">
                <h1 className='h1-partner'>Want to connect with ZWIGATO </h1>

                    <form onSubmit={handleSubmit}>

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
        </div>
    );
}

export default PartnerRegister;
