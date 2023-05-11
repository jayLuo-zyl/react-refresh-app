import './App.css';
import React, { Component } from 'react';
import AddNew from "./AddNew";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import FormCustom from './Form';
import GoogleMap from './AddGoogleMap';
import WeatherByLocation from './AddWeather';

// import SearchBar from './SearchBar';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Cinderace",
      phone: "415-312-2391",
      city: "Brentwood",
      zip: "94513"
    },
    {
      id: "2",
      name: "Pikachiu",
      phone: "925-503-9858",
      city: "San Francisco",
      zip: "94132"
    },
    {
      id: "3",
      name: "Riolu",
      phone: "925-608-0869",
      city: "Antioch",
      zip: "94531"
    },
    {
      id: "4",
      name: "Ziky",
      phone: "415-520-1818",
      city: "Tiburon",
      zip: "94920"
    },
  ]

  // const addedString = "a new string for testing";
  const myStyles = { display: 'none' };
  const initLatitude = 37.7749;
  const initLongitude = -122.4194;

  return (
    <div>
      <ContactList contacts={contacts} addedString="A testing" />
      <WeatherByLocation city={contacts[1].city} zip={contacts[1].zip} user={contacts[1].name} />
      <ContactCard />
      <AddNew />
      <FormCustom myStyles={myStyles} />
      <GoogleMap initLatitude={initLatitude} initLongitude={initLongitude} />

    </div>


  );
}

export default App;
