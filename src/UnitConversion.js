import React, { useState } from "react";
import "./Weather.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <p className="current-temp">
        <span>{props.fahrenheit}°</span>
        <span className="change-unit">
          <button href="#" className="unit active">
            F
          </button>{" "}
          |{" "}
          <button href="#" className="unit" onClick={convertToCelsius}>
            C
          </button>
        </span>
      </p>
    );
  } else {
    let celsius = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <p className="current-temp">
        <span>{celsius}°</span>
        <span className="change-unit">
          <button href="#" className="unit" onClick={convertToFahrenheit}>
            F
          </button>{" "}
          |{" "}
          <button href="#" className="unit active">
            C
          </button>
        </span>
      </p>
    );
  }
}
