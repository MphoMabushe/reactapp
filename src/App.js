import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App () {
  return (
    <div className="App container">
   <Weather/>
  <footer>
  This project was coded by <a href ="https://mpho-portfolio-d9f5d1.netlify.app/?Message=+++++++++++++++++m+++++++++++++++++++#mpho-projects" target="_blank" rel="noreferrer" >Mpho Mabushe </a>,is <a href="https://github.com/MphoMabushe/reactapp" target="_blank" rel="noreferrer">open-souced on
  Github</a> and <a href="https://reatrapp.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
      </footer>
    </div>
  );
}

