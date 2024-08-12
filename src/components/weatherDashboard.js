import React from 'react';

const WeatherDashboard = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Weather Dashboard</div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black">
            Current Temperature: {weatherData.temp}°C
          </div>
          <p className="mt-2 text-gray-500">
            The weather condition is currently: {weatherData.description}.
          </p>
          <div className="mt-4">
            <img src={`http://openweathermap.org/img/w/${weatherData.icon}.png`} alt="Weather Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
