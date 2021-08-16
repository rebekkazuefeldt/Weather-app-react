import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

  let apiKey = "2005b16f2536bde86914bfb6c901642a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-4 weekly">Thursday</div>
      <div className="col-2 weekly">
        <img
          src="https://raw.githubusercontent.com/divyanshu013/react-animated-weather/HEAD/react-animated-weather.gif"
          alt="weather icon"
          className="forecast-icon"
        />
      </div>
      <div className="col-4 weekly">70°/60°</div>
      <div className="col-1"></div>
    </div>
  );
}
