import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecastData from "./WeatherForecastData";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div key={index}>
                <WeatherForecastData data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "2005b16f2536bde86914bfb6c901642a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
