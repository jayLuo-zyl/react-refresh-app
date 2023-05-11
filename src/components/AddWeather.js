import React, { useState, useEffect } from "react";

// Funtional Component: with useState, React data fetch

const WeatherByLocation = ({ user, city, zip }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    // Set up the Weather API endpoint URL
    // const antiochLat = "37.958248"
    // const antiochLon = "-121.752881"
    // const url = "https://api.openweathermap.org/data/2.5/weather?lat="+antiochLat+"&lon="+antiochLon+"&appid=<API KEY>"
    const url = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&appid=11af49af7399e970dbc2d366ee679a1b"
    const fetchWeatherData = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const jsonData = await response.json();
                setWeatherData(jsonData.list[0].weather[0].main);
                // console.log(weatherData);
                // This console.log above won't work as In React, state updates are asynchronous, 
                // which means that calling setWeatherData(jsonData) does not immediately update the weatherData state variable. 
                // The state update is scheduled and will take effect in the next render cycle.

            } else {
                // Handle error response
                console.log('Error:', response.status);
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        console.log(`Weather Data: ${JSON.stringify(weatherData)}`);
    }, [weatherData]);

    return (
        <div className="componentSpace">
            <h3>Functional Component:</h3>
            <p>Weather Now:</p>
            <p style={{ 'color': 'green' }} className="searchBar"> {user} at {city}: {weatherData}</p>
        </div>
    )

};

export default WeatherByLocation;