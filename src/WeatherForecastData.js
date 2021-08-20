import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function WeatherForecastData(props) {
  function showDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div className="row">
      <div className="col-1 align-self-center"></div>
      <div className="col-4 align-self-center weekly">{showDay()}</div>
      <div className="col-2 d-flex align-self-center weekly">
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>
      <div className="col-4 align-self-center weekly">
        {Math.round(props.data.temp.max)}°/{Math.round(props.data.temp.min)}°
      </div>
      <div className="col-1 align-self-center"></div>
    </div>
  );
}
