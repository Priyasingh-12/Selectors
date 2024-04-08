import React, { useState } from 'react';

const StateSelector = ({ selectedCountry }) => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    alert(`Selected State: ${state}`);
  };

  const statesData = {
    USA: ['California', 'Texas', 'New York'],
    Canada: ['Ontario', 'Quebec', 'Alberta'],
    UK: ['England', 'Scotland', 'Wales'],
  };

  return (
    <div>
      <h2>Select State:</h2>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select</option>
        {selectedCountry && statesData[selectedCountry].map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>
    </div>
  );
};

export default StateSelector;
