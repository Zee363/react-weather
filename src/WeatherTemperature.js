import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature-temperature">
   <span className="temperature">{Math.round(props.celsius)}</span>
   <span className="unit">&deg;C</span>    
  </div>
  );
}