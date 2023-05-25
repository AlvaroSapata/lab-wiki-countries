import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
  // console.log('allCountries -> ', allCountries);
  return (
    <div>
      <h4>Countries List</h4>
      {allCountries.map((eachCountry) => {
        {/* console.log(eachCountry); */}
        return (
          <div key={eachCountry.alpha3Code}>
            <Link to={`/country/${eachCountry.alpha3Code}`}>
              <div>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                  alt="bandera"
                />
                <p>{eachCountry.name.common}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
