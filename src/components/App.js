import './App.css';
import React, { Component } from 'react';
import AddNew from "./AddNew";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import FormCustom from './Form';
import GoogleMap from './AddGoogleMap';

// import SearchBar from './SearchBar';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Jay",
      phone: "415-312-2391"
    },
    {
      id: "2",
      name: "Ian",
      phone: "925-503-9858"
    },
    {
      id: "3",
      name: "Jasper",
      phone: "925-608-0869"
    },
    {
      id: "4",
      name: "Vickey",
      phone: "415-520-1818"
    },
  ]

  // const addedString = "a new string for testing";
  const myStyles = { display: 'none' };
  const initLatitude = 37.7749;
  const initLongitude = -122.4194;

  return (
    <div>
      <ContactList contacts={contacts} addedString="A testing" />
      <ContactCard />
      <AddNew />
      <FormCustom myStyles={myStyles} />
      <GoogleMap initLatitude={initLatitude} initLongitude={initLongitude}/>
      
    </div>


  );
}

export default App;
