import React from 'react';
import './DetailedRoute.css';
import { BrowserRouter as Link } from "react-router-dom";

function DetailedRoute(){
    const min = 2;
    const max = 6;

    //Randomly generating number of stops for testing front-end
    let numStops = Math.floor(Math.random() * (+max - +min)) + +min;
    let Stops = []
    const r = <div className = "Stop">Stop Name</div>
    const f = <img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>
    for (let i=0; i<numStops; i++){
        Stops.push(r)
        Stops.push(f)  
    }
    Stops.pop()
    return(
      <div>
        <Link to ="/possibleRoutes">
          <button type ="button">Back</button>
        </Link>
      <div className = "Stops">
        {Stops}
      </div>
      </div>
    )
  }

  export default DetailedRoute