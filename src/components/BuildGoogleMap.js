import React, {useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

// Funtional Component: without state
// Uisng Arrow Function
const MyGoogleMap = (props) => {
    const { curLatitude, curLongitude } = props;

//     useEffect(() => {
//         console.log(`cur Latitude: ${curLatitude},
// cur Longitude: ${curLongitude}`);
//     }, [curLatitude, curLongitude]);

    return (
        <div>
            <Map google={props.google} center={{ lat: curLatitude, lng: curLongitude }} zoom={10}>
                <Marker position={{ lat: curLatitude, lng: curLongitude }} />
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MyGoogleMap);
