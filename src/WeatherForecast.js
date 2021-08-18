import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 weekly">{forecast[0].dt}</div>
        <div className="col-2 weekly">
          <WeatherIcon code={forecast[0].weather[0].icon} size={20} />
        </div>
        <div className="col-4 weekly">
          {forecast[0].temp.max}°/{forecast[0].temp.min}°
        </div>
        <div className="col-1"></div>
      </div>
    );
  } else {
    let apiKey = "2005b16f2536bde86914bfb6c901642a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
