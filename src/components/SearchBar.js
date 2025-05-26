import React, { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import '../styles/SearchBar.css';
const SearchBar = () => {
  const [input, setInput] = useState('');
  const { updateCity } = useWeather();

  const handleSearch = () => {
    if (input.trim()) updateCity(input);
  };

  return (
    <div className='box'>
      <input
        placeholder="Search city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
