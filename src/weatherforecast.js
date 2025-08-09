import React from "react";
import WeatherIcon from "./weathericon";
import axios from "axios";
import "./weatherforecast.css";

export default function WeatherForecast(props) {

      function handleResponse(response) {
       console.log(response.data)
      }
    let apiKey="31o84e907eeba386aabt3500e710ff10";
    let longtitude = props.coordinates.longtitude;
    let lattitude= props.coordinates.lattitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longtitude}&lat=${lattitude}&key=${apiKey}`;
   
    
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
    return(
        <div className="weatherforecast">
       <div className="row">
        <div className="col">
            <div className="weatherforecast-day">
           Thu
            </div>
            <WeatherIcon code="01d" size="32"/>
           <div className="weatherforecast-temp">
          <span className="weatherforecastmax-temp">19°</span>
          <span className="weatherforecastmin-temp">18°</span>
           </div>
        </div>
       </div>
        </div>
    );
    
}