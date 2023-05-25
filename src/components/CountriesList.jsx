import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function CountriesList({ allCountries }) {
  // console.log('allCountries -> ', allCountries);
  return (
    <div>
      <h4>Countries List</h4>
      {allCountries.map((eachCountry) => {
        {
          /* console.log(eachCountry); */
        }
        return (
          <Card key={eachCountry.alpha3Code} className="CardContainer">
            <Link to={`/country/${eachCountry.alpha3Code}`}>
              <Card.Img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                alt="bandera"
              />
              <Card.Title className="titulopais">
                {eachCountry.name.common}
              </Card.Title>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

export default CountriesList;
