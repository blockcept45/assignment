import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../api/weather';
import { useWeather } from '../context/WeatherContext';
import '../styles/Weather.css';
const WeatherInfo = () => {
  const { city, unit } = useWeather();

  const { data, error, isLoading } = useQuery({
    queryKey: ['weather', city, unit],
    queryFn: () => fetchWeather(city, unit),
    refetchInterval: 30000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching weather data</p>;

  return (
    <div className="weather-info">
      <h2>{data.name}</h2>
      <p>Temp: {data.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
      <p>Condition: {data.weather[0].main}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherInfo;
