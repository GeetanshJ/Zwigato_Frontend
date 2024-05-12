import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../src/css/Partner_Register.css"
const Partner_Register = () => {
    const [hotelName, setHotelName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = axios.get("http://localhost:8000/location");
                setLocations((await response).data.locate);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('hotel_name', hotelName);
        formData.append('address', address);
        formData.append('contact_number', contactNumber);
        formData.append('location_id', selectedLocation);
        formData.append('hotel_image', image);
        console.log(formData)
        try {
            await axios.post('http://localhost:8000/owner/hotel_details', formData, {

                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setHotelName('');
            setAddress('');
            setContactNumber('');
            setSelectedLocation('');
            setImage(null);
        } catch (error) {
            console.error('Error submitting hotel details:', error);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <h2>Add Hotel Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="hotelName">Hotel Name:</label>
                    <input
                        type="text"
                        id="hotelName"
                        value={hotelName}
                        onChange={(e) => setHotelName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input
                        type="text"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="location">Select Location:</label>
                    <select
                        id="location"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                        <option value="">Select Location</option>
                        {locations.map((location) => (
                            <option key={location.locationID} value={location.locationID}>
                                {location.location_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="hotelImage">Upload Image:</label>
                    <input type="file" id="hotelImage" onChange={handleImageChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Partner_Register;
