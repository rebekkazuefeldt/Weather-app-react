import React from "react";

export default function WeatherForecast() {
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
