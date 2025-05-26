import React from 'react';
import { useWeather } from '../context/WeatherContext';
import '../styles/ErrorMessage.css';
const ErrorMessage = () => {
  const { error, setError } = useWeather();

  if (!error) return null;

  return (
    <div style={{ color: 'red' }}>
      <p>Error: {error}</p>
      <button onClick={() => setError(null)}>Dismiss</button>
    </div>
  );
};

export default ErrorMessage;
