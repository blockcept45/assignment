import axios from 'axios';
 
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
   const API_KEY =  'eb26b7267b9ff5656472dd219b9dc4fa';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city, unit = 'metric') => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, appid: API_KEY, units: unit },
  });
  return res.data;
};

export const fetchForecast = async (city, unit = 'metric') => {
  const res = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, appid: API_KEY, units: unit },
  });
  return res.data;
};

