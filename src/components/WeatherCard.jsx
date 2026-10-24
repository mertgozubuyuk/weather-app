import React from "react";
import "../css/WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2 className="weather-name">{weather.name}</h2>

      <div className="weather-header">
        <img
          className="weather-image"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p className="weather-desc">{weather.weather[0].description}</p>
      </div>

      <h1 className="weather-temp">{Math.round(weather.main.temp)}°C</h1>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <p className="weather-humidity">{weather.main.humidity}%</p>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <p className="weather-wind">
            {Math.round(weather.wind.speed * 3.6)} km/h
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
