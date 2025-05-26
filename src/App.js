import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import Login from './components/Login';
import { WeatherProvider, useWeather } from './context/WeatherContext';
import { AuthProvider, useAuth } from './context/AuthContext';

const ToggleUnitButton = () => {
  const { unit, toggleUnit } = useWeather();
  return <button onClick={toggleUnit}>Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}</button>;
};

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <button onClick={logout} style={{ float: 'right' }}>Logout</button>
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <ToggleUnitButton />
      <WeatherInfo />
      <Forecast />
    </>
  );
};

const AppContent = () => {
  const { session } = useAuth();
  return session ? <Dashboard /> : <Login />;
};

const App = () => (
  <AuthProvider>
    <WeatherProvider>
      <div className="App">
        <AppContent />
      </div>
    </WeatherProvider>
  </AuthProvider> 
);

export default App;
