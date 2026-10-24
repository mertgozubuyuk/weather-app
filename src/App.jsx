import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import WeatherCard from "./components/WeatherCard";
import AppBar from "./components/AppBar";

function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`,
      );
      console.log(response.data);
      console.log(response.data.main.temp);
      setWeatherData(response.data);
    } catch (error) {
      setError("City not found or an error occurred");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="app-wrapper">
      <AppBar />
      <main className="app-container">
        <SearchBar onSearch={fetchWeather} />
        {!loading && !error && !weatherData && (
          <p className="welcome-message">Please search for a city...</p>
        )}
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && weatherData && (
          <WeatherCard weather={weatherData} />
        )}
      </main>
    </div>
  );
}

export default App;
