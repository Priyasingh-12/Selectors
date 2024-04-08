import React, { useState } from 'react';
import CountrySelector from './CountrySelector';
import StateSelector from './StateSelector';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <CountrySelector onChange={handleCountryChange} />
      {selectedCountry && <StateSelector selectedCountry={selectedCountry} />}
    </div>
  );
}

export default App;
