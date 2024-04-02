import React from "react";
import { WiDaySunny } from "weather-icons-react";


export default function WeatherIcon(props) {
  return (
  <img src="https://openweathermap.org/img/wn/png" alt={props.alt} />
    );
}