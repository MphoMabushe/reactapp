import React, { useState,useEffect } from "react";
import axios from "axios";
import "./weatherforecast.css";
import WeatherForecastDay from "./weatherforecastday";


export default function WeatherForecast(props) {
let [loaded,setLoaded]=useState(false);
let [forecast,setForecast]=useState(null);

useEffect(()=>{
  setLoaded(false);
},[props.coordinates]);

      function handleResponse(response) {
       console.log(response);
       setForecast(response.data.daily)
       setLoaded(true);
      }

      function load() {
        let apiKey="31o84e907eeba386aabt3500e710ff10";
    let longtitude=props.coordinates.longitude;
    let lattitude=props.coordinates.latitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longtitude}&lat=${lattitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
      }
      if(loaded){
    return(
        <div className="weatherforecast">
       <div className="row">
        {forecast.map(function (dailyForecast,index) {
        if(index<6){
        return(
        <div className="col">
           <WeatherForecastDay data={dailyForecast}/>
        </div>
         );}
         else{
          return null;
         }
        }
      )}
       </div>
        </div>
    );}
    
      else{
        load()
      return null;  
    }}