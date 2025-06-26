import React, { useState } from "react";

export default function WeatherTemperature(props){
const [unit,setUnit]=useState("celsius")
   function showFarenheit(event) {
    event.preventDefault();
   setUnit("farenheit");}
   function showCelsius(event) {
    event.preventDefault();
   setUnit("celsius");
   }
if (unit === "celsius"){
return(
    <div className="weathertemperature">
    <span className="temperature">
                    {Math.round(props.celsius)}
                    </span>
                    <span className="unit">℃| {""} <a href ="/" className="text-decoration-none" onClick={showFarenheit}>F</a></span>

                </div>
);}
else{
    let farenheit = (props.celsius * 9)/5 + 35
    return(
    <div className="weathertemperature">
    <span className="temperature">
                    {Math.round(farenheit)}
                    </span>
                    <span className="unit"> <a href="/" className="text-decoration-none"  onClick={showCelsius}>℃</a> {""} |F</span>

                </div>);

;
}
   }