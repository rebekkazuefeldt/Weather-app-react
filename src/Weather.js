import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";
import UnitConversion from "./UnitConversion";
import WeatherIcon from "./WeatherIcon";
export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      currentCity: response.data.name,
      temperature: Math.round(response.data.main.temp),
      lowTemp: Math.round(response.data.main.temp_min),
      highTemp: Math.round(response.data.main.temp_max),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
    setLoaded(true);
  }
  function search() {
    let apiKey = "2005b16f2536bde86914bfb6c901642a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city.."
        onChange={updateCity}
        className="city-input"
      />
      <button type="Submit" className="submit">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div className="card Weather">
        <div className="card-body">
          {form}
          <div className="current-weather">
            <h1 className="current-city">{weather.currentCity}</h1>
            <h2 className="current-time">
              <FormattedDate date={weather.date} />
            </h2>
            <hr />
            <UnitConversion fahrenheit={weather.temperature} />
            <p className="conditions">
              <span>
                <WeatherIcon code={weather.icon} alt={weather.description} />
              </span>
              <br />
              <span className="sky-description">{weather.description}</span>
            </p>
            <p>
              H: <span>{weather.highTemp}</span>° / L:{" "}
              <span>{weather.lowTemp}</span>°
            </p>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-6">Wind</div>
                <div className="col-6">Humidity</div>
                <div className="col-6 weather-details">{weather.wind} mph</div>
                <div className="col-6 weather-details">{weather.humidity}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div className="loading">Loading...</div>;
  }
}
