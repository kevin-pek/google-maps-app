import React from 'react';
import axios from 'axios';
import './App.css';
import Map from './components/Map';

function App() {
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <Map />
  );
}

export default App;
