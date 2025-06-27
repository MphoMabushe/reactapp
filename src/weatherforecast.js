import React from "react";
import WeatherIcon from "./weathericon";
import axios from "axios";
import "./weatherforecast.css";

export default function WeatherForecast(props) {

      function handleResponse(response) {
       console.log(response.data)
      }
    let apiKey="7746bdeabca928cfedcad71e52fd9d66";
    let longtitude = props.coordinates.lon;
    let lattitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
   
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    return(
        <div className="weatherforecast">
       <div className="row">
        <div className="col">
            <div className="weatherforecas-day">
           Thu
            </div>
            <WeatherIcon code="01d" size="32"/>
           <div className="weatherforecast-temp">
          <span className="weatherforecastmax-temp">19°</span><span className="weatherforecastmin-temp">18°</span>
           </div>
        </div>
       </div>
        </div>
    );
    
}