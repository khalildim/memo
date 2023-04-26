import React, { useState, useEffect } from "react";
import "./HeaderStyles.css";
import { TiWeatherSunny } from "react-icons/ti";
import { FaSun, FaCloudRain, FaSnowflake, FaCloud } from "react-icons/fa";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";

function Header() {
  const [date, setDate] = useState(new Date());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch the weather data from an API based on the user's location
    // and update the state
    fetchWeather().then((data) => setWeather(data));
  }, []);

  // Update the date every second
  setInterval(() => {
    setDate(new Date());
  }, 1000);

  const fetchWeather = async () => {
    // Use an API like OpenWeatherMap to fetch the current weather
    // data based on the user's location
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=01231f03ae336593ccd4465cb55e984f&units=metric`
    );
    const data = await response.json();
    return data;
  };

  const getWeatherIcon = () => {
    if (!weather) {
      return <FaCloud />;
    }

    const weatherCode = weather.weather[0].id;

    if (weatherCode >= 200 && weatherCode <= 232) {
      return <TiWeatherSunny />;
    } else if (weatherCode >= 300 && weatherCode <= 321) {
      return <FaCloud />;
    } else if (weatherCode >= 500 && weatherCode <= 531) {
      return <FaCloudRain />;
    } else if (weatherCode >= 600 && weatherCode <= 622) {
      return <FaSnowflake />;
    } else if (weatherCode >= 701 && weatherCode <= 781) {
      return <FaSun />;
    } else if (weatherCode === 800) {
      return <FaSun />;
    } else if (weatherCode >= 801 && weatherCode <= 804) {
      return <FaCloud />;
    } else {
      return <FaCloud />;
    }
  };

  return (
    <div className="header">
      <div className="icon-logo">
        <AutoAwesomeMosaicIcon sx={{ fontSize: 40 }} />
        <h1>MemoApp</h1>
      </div>

      <div className="weather-container">
        {weather ? (
          <>
            {getWeatherIcon()}
            <p>{Math.round(weather.main.temp)}°C</p>
          </>
        ) : (
          <p>Loading weather...</p>
        )}
        <p>{date.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Header;
