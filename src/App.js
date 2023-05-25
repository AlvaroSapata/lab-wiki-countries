import './App.css';
import React, { useState, useEffect } from 'react';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [allCountries, setAllCountries] = useState(countriesData);
  // console.log(allCountries);
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <CountriesList allCountries={allCountries} />
        
        <Routes>
          <Route path="/country/:countryId" element={<CountryDetails allCountries={allCountries}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
