import React, { useState, useEffect } from "react";
import "./App.css";

const CountrySelector = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");


  const handleCountryChange = (event) => {
    const countryId = event.target.value;
    setSelectedCountryId(countryId);
    onCountryChange(countryId); 
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const countriesData = await response.json();
        console.log(countriesData.data);
        setCountries(countriesData.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="dropdown">
      <div className="content">
        <p>Country</p>
        <span>turn</span>
      </div>
      <button type="button"></button>
      <select
        name="country"
        className="menu"
        onChange={handleCountryChange}
        value={selectedCountryId}
      >
        <option className="option" value=""
        >--Select Country--</option>
        {countries.map((country) => (
          <option className="option" key={country.country_id} value={country.country_id}
          >
            {country.country}
          </option>

        ))}
      </select>
    
    </div>
  );
};

export default CountrySelector;
