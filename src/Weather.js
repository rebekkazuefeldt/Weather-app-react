import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "boostrap";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      currentCity: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2005b16f2536bde86914bfb6c901642a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
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

  //let weatherData = {
  //city: "New York",
  //date: "Thursday 21:29",
  //temperature: 70,
  //description: "Sunny",
  //imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  //humidity: 30,
  //wind: 2,
  //};
  if (loaded) {
    return (
      <div className="card Weather">
        <div className="card-body">
          {form}
          <div className="current-weather">
            <h1 className="current-city">{weather.currentCity}</h1>
            {/*<h2 className="current-time">Last Updated: {weatherData.date}</h2>*/}
            <hr />
            <p className="current-temp">
              <span>{Math.round(weather.temperature)}</span>
              <span className="change-unit">
                <a href="#" className="unit active">
                  F
                </a>{" "}
                |
                <a href="#" className="unit">
                  C
                </a>
              </span>
            </p>
            <p className="conditions">
              <span>
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="icon"
                />
              </span>
              <br />
              <span className="sky-description">{weather.description}</span>
            </p>
            <p>
              H: <span>75</span>° / L: <span>68</span>°
            </p>
            <hr />
            <Container>
              <Row>
                <Col xs="6">Wind</Col>
                <Col xs="6">Humidity</Col>
                <Col xs="6" className="weather-details">
                  {weather.wind} mph
                </Col>
                <Col xs="6" className="weather-details">
                  {weather.humidity}%
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
