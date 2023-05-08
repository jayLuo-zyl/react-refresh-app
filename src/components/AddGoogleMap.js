import React, { useState, useEffect } from "react";
import MyGoogleMap from "./BuildGoogleMap";

// Funtional Component: without state

// Uisng Arrow Function
const GoogleMap = ({ initLatitude, initLongitude }) => {
    const [curLatitude, setCurLatitude] = useState(initLatitude);
    const [curLongitude, setCurLongtitude] = useState(initLongitude);
    const [inputValue, setInputValue] = useState('');

    // Set up the Google Maps API endpoint URL
    const url = "https://maps.googleapis.com/maps/api/geocode/json";

    const googleSearch = () => {
        const zipCode = inputValue;
        const params = {
            address: zipCode,
            key: process.env.REACT_APP_GOOGLE_MAP_API_KEY
        };
        fetch(url + "?" + new URLSearchParams(params))
            .then(response => response.json())
            .then(data => {
                // Extract the latitude and longitude
                const newLatitude = data.results[0].geometry.location.lat;
                const newLongitude = data.results[0].geometry.location.lng;
                setCurLatitude(newLatitude);
                setCurLongtitude(newLongitude);
            })
            .catch(error => console.error(error));
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
      }

    return (
        <div className="componentSpace">
            <h3>Functional Component:</h3>
            <p>Google Map:</p>
            <div className="container">
                <div className="searchBar" >
                    <h4>Enter Zip/City:</h4>
                    <input type="text" placeholder=" City/Zip " onChange={handleChange}/>
                    <button type="submit" style={{ 'marginLeft': '10px' }} onClick={googleSearch}>Search</button>
                </div>
                <div className="searchBar">
                    <MyGoogleMap curLatitude={curLatitude} curLongitude={curLongitude}/> 
                </div>
            </div>


        </div>
    )
}

export default GoogleMap;