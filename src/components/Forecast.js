import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchForecast } from '../api/weather';
import { useWeather } from '../context/WeatherContext';
import '../styles/Forecast.css';

const Forecast = () => {
  const { city, unit } = useWeather();

  const { data, error, isLoading } = useQuery({
    queryKey: ['forecast', city, unit],
    queryFn: () => fetchForecast(city, unit),
    refetchInterval: 30000,
  });

  if (isLoading) return <p>Loading forecast...</p>;
  if (error) return <p>Error fetching forecast</p>;

  const daily = data.list.filter((_, i) => i % 8 === 0); // Every 24h

  return (
  <div className="forecast-container">
    <h3>5-Day Forecast</h3>
    {daily.map((item) => (
      <div key={item.dt} className="forecast-day">
        <p className="forecast-date">{new Date(item.dt_txt).toDateString()}</p>
        <p className="forecast-temp">Temp: {item.main.temp}°</p>
        <p className="forecast-condition">{item.weather[0].main}</p>
        <div className="forecast-icon">
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </div>
      </div>
    ))}
  </div>
);
}

export default Forecast;
