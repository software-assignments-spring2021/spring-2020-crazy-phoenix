import React from 'react';
import './DetailedRoute.css';
import { BrowserRouter as Link } from "react-router-dom";
import Hamburger from './hamburgerMenu.js';
import Toolbar from './toolbar.js';

function DetailedRoute(props){
  const object = JSON.parse(props.location.state.routeString);
  const ourRoute = object.legs[0];

  console.log(ourRoute);

  let displayStops = []

  for (let i=0; i <ourRoute.steps.length; i++){
    //Adding transit steps to our display
    if (ourRoute.steps[i].travel_mode === "TRANSIT"){

      if (i>0){
        displayStops.push(<img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>);
      }
      const depStop = ourRoute.steps[i].transit_details.departure_stop.name;
      const arrStop = ourRoute.steps[i].transit_details.arrival_stop.name;
      const d = <div className = "Stop">{depStop}</div>
      const iconUrl = ourRoute.steps[i].transit_details.line.icon;
      const l = <img src = {iconUrl} alt = "subway icon"/>
      const f = <img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>
      const a = <div className = "Stop">{arrStop}</div>
      displayStops.push(d,l,f,a);
    }
    //Adding walking steps to our display
    else if(ourRoute.steps[i].travel_mode === "WALKING"){
      
      if (i < ourRoute.steps.length -1){
      const w = <div className = "Stop">Walk to</div>
      displayStops.push(w);
      }
      
      else {
        const f = <img src = "DownArrow.png" alt = "Down arrow" className = "Arrow"/>
        const w = <div className = "Stop">Walk to Destination: {ourRoute.end_address}</div>
        displayStops.push(f,w);
      }
      
    }

  }

    return(
      <header id='detailedRoute'>
      <Toolbar/>
        <div>
          {/* <Link to ={{pathname: "/possibleRoutes"}}>
            <button type ="button">Back</button>
          </Link> */}
        <div className = "Stops">
          {displayStops}
        </div>
        </div>
        </header>
    )
  }

  export default DetailedRoute
