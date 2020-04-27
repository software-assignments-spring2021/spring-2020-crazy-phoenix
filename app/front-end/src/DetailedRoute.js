import React, { useState } from 'react';
import './DetailedRoute.css';
import { BrowserRouter as Link } from "react-router-dom";
//import Async from 'react-async';
const allStops = [];
function DetailedRoute(){
  let [Stops, setStops] = useState([]);
  const load = () =>{
    fetch('http://localhost:3000/data', {
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((data) =>{

   
    /*const depStop = data[i].transit_details.departure_stop.name;
    const arrStop = data[0].transit_details.arrival_stop.name;
    const depStop1 = data[1].transit_details.departure_stop.name;
    const arrStop1 = data[1].transit_details.arrival_stop.name;

    const d = <div className = "Stop">{depStop}</div>
    const f = <img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>
    const a = <div className = "Stop">{arrStop}</div>
    const o = <div className = "Stop1">{depStop1}</div>
    const m = <img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>
    const g = <div className = "Stop1">{arrStop1}</div>*/
    //setStops([d,f,a,o,m,g]);
    //const allStops = []; 
    //const allStops = [];
    for(let j = 0; j < data.length; j++ ){
      const depStop = data[j].transit_details.departure_stop.name;
      allStops.push(depStop);
    }
    const displayStops = allStops.map((stop) => 
    <div>
      <div className = "Stop">{stop}</div>
    </div>
    );
 
    //const allStops
    //const lengthh = [1,3,4];
    setStops(displayStops);

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