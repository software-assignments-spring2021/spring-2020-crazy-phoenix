import React, { useState } from 'react';
import './DetailedRoute.css';
import { BrowserRouter as Link } from "react-router-dom";

const allStops = [];
function DetailedRoute(props){
  console.log(`received: ${props.location.state}    show: ${JSON.stringify(props.location.state)}`);
  const object = JSON.parse(props.location.state);

  const ourRoute = object.routes[0].legs[0];
  console.log(ourRoute);
  let displayStops = []
  for (let i=0; i <ourRoute.steps.length; i++){
    if (ourRoute.steps[i].travel_mode == "TRANSIT"){
      if (i>0){
        displayStops.push(<img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>);
      }
      console.log("yessir");
      const depStop = ourRoute.steps[i].transit_details.departure_stop.name;
      const arrStop = ourRoute.steps[i].transit_details.arrival_stop.name;
      const d = <div className = "Stop">{depStop}</div>
      const iconUrl = ourRoute.steps[i].transit_details.line.icon;
      const l = <img src = {iconUrl} />
      //const l = <div>{ourRoute.steps[i].transit_details.line.name}</div>
      const f = <img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>
      const a = <div className = "Stop">{arrStop}</div>
      displayStops.push(d,l,f,a);
    }
    else if(ourRoute.steps[i].travel_mode == "WALKING"){
      if (i < ourRoute.steps.length -1){
      const w = <div className = "Stop">Walk to</div>
      displayStops.push(w);
      }
      else{
        const f = <img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>
        const w = <div className = "Stop">Arrive at Destination</div>
        displayStops.push(f,w);
      }
      
    }

  }

    return(
        <div>
          <Link to ="/possibleRoutes">
            <button type ="button">Back</button>
          </Link>
        <div className = "Stops">
          {displayStops}
        </div>
        </div>
    )
  }

  export default DetailedRoute