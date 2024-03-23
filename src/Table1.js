// Table1.js
import React, { useState, useEffect } from 'react';

function Table1() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>European Countries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Area</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.name.common}>
              <td>{country.name.common}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td>{country.area}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table1;
