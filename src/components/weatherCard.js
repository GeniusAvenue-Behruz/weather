import React, { useState, useEffect } from 'react';
import WeatherDashboard from './weatherDashboard';

function WeatherCard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&appid=d190245725a706f2d3d1cb710e29d307`);
        if (!response.ok) {
          throw new Error('Weather data could not be fetched.');
        }
        const data = await response.json();
        setWeatherData({
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="weatherCard">
      <WeatherDashboard weatherData={weatherData} />
    </div>
  );
}

export default WeatherCard;
