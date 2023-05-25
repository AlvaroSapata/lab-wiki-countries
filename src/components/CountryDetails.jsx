import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  console.log('props -> ', props);
  // 0. Extraemos la info que necesitamos de params / query
  const params = useParams();
  console.log('params -> ', params);

  const filteredCountries = props.allCountries.filter(
    (eachCountry) => eachCountry.alpha3Code === params.countryId
  );
  console.log(filteredCountries);

  if (filteredCountries.length === 0) {
    return (
      <div>
        <h4>Country not found</h4>
      </div>
    );
  }

  const countryDetails = filteredCountries[0];
  console.log(countryDetails);
  return (
    <div>
      <h4>Country Details</h4>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
          alt="imagen"
        />
        <h5>{countryDetails.name.common}</h5>
        <p>Capital: {countryDetails.capital} </p>
        <p>Area: {countryDetails.area} km2</p>
        <p>Borders:</p>
        <div>
          {countryDetails.borders.map((eachBorder) => {
            return (
              <p>
              <Link to={`/country/${eachBorder}`}>
                {eachBorder}
              </Link>
              </p>

            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
