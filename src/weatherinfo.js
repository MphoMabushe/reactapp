import React from "react";
import FormattedDate from "./formattedDate";
import WeatherIcon from "./weathericon";
import WeatherTemperature from "./weathertemperature";

export default function WeatherInfo(props) {
    return(
        <div className="weatherinfo">
       <h1>{props.data.city}</h1>
             <ul>
               <li>
                 <FormattedDate date={props.data.date} />
               </li>
               <li className="text-capitalize">
                 {props.data.description}
               </li>
             </ul>
             <div className="row mt-3">
              <div className="col-6">
                 <div className="weather-icon-temp-group">
                 < WeatherIcon  code={props.data.icon}/>
                  < WeatherTemperature  celsius={props.data.temperature} />
              </div>
              </div>
               <div className="col-6">
                 <ul>
                   <li>
                     Humidity:{props.data.humidity}%
                   </li>
                   <li>
                     Wind:{props.data.wind}km/h
                   </li>
                 </ul>
                 </div>
                </div>
                 </div>
    );
}