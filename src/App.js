import './App.css';
import React, { useState, useEffect } from 'react';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  // const [allCountries, setAllCountries] = useState(countriesData);
  const [allCountries, setAllCountries] = useState(null);
  // console.log(allCountries);

  const getData = async () => {

    try {
      const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
      console.log(response)
      
      setAllCountries(response.data)
    } catch (error){
      console.log(error)
    }

  }

  useEffect(() => {
    getData();
  }, []);

  if (allCountries === null) {
    return (
      <div>
        <h3>... Loading</h3>
      </div>
    );
  }

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
