import React, { useState, useEffect } from 'react';

const StateSelector = ({ selectedCountry }) => {
  const [selectedState, setSelectedState] = useState('');
  const [statesData, setStatesData] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        if (!selectedCountry) return; 
        const response = await fetch(`https://countriesnow.space/api/v0.1/countries/states/${selectedCountry}`);
        if (!response.ok) {
          throw new Error('Failed to fetch state data');
        }
        const statesData = await response.json();
        setStatesData(statesData);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    };

    fetchStates();
  }, [selectedCountry]);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    alert(`Selected State: ${state}`);
  };

  return (
    <div className="dropdown">
      <div className="content">
        <p>States</p>
        <span>turn</span>
      </div>
      <button type="button"></button>
      <select
        name="state"
        className="menu"
        onChange={handleStateChange}
        value={selectedState} 
      >
        <option className="option" value="">--Select State--</option>
        {statesData.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>
    </div>
  );
};

export default StateSelector;
