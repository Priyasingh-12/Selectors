import React, { useState } from 'react';

const CountrySelector = ({ onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    onChange(country);
  };

  return (
    <div>
      <h2>Select Country:</h2>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
      </select>
    </div>
  );
};

export default CountrySelector;
