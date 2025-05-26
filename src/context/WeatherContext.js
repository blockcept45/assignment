import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem('city') || 'London');
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  const updateCity = (newCity) => {
    setCity(newCity);
    localStorage.setItem('city', newCity);
  };

  return (
    <WeatherContext.Provider value={{ city, updateCity, unit, toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
