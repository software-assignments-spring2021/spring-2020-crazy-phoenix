import React, { useState } from 'react';
import './DetailedRoute.css';
import { BrowserRouter as Link } from "react-router-dom";

function DetailedRoute(){
  let [Stops, setStops] = useState([]);
  const load = () =>{
    fetch('http://localhost:3000/data', {
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((data) =>{

    const depStop = data[0].transit_details.departure_stop.name;
    const arrStop = data[0].transit_details.arrival_stop.name;

    const d = <div className = "Stop">{depStop}</div>
    const f = <img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>
    const a = <div className = "Stop">{arrStop}</div>
    setStops([d,f,a]);

    });
  }
    load();
    
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