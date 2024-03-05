import React from "react";
import "./Weather";
import "./Weather.css";

export default function Weather () {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Search for a city.."/>
        <input type="submit"/>
      </form>
    <div className="Weather">
    <h1>Cape Town</h1>
    </div>
    </div>
  )
}