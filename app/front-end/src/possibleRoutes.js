import React, {Component, useState, useEffect} from 'react';
import './possibleRoutes.css';
import { ORIGIN, DESTINATION} from './HomePage';
import {Link} from "react-router-dom";
import DetailedRoute from './DetailedRoute';

const getRoute = () => {
  const possibleRoutes = [];
  const subwayLines = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'G', 'N', 'Q', 'R', 'J', 'Z', 'L', 'S', 'G'];
  let randomLength;

  const randomRoutesListLength = Math.floor(Math.random()*(5-1))+1; // show 1-5 possible routes
  for (let i = 0; i < randomRoutesListLength; i++) {
    const route = [];
    randomLength = Math.floor(Math.random()*(5-1)+1);
    const subwayMax = subwayLines.length;
    const subwayMin = 1;
    for (let k = 0; k < randomLength; k++) {
      const subwayIndex = Math.floor(Math.random()*(subwayMax-subwayMin)+subwayMin);
      route.push(subwayLines[subwayIndex]);
    }
    possibleRoutes.push(route);
  }

  return possibleRoutes;
};

const addArrows = (route) => {
  const newArray = ['->'];
  for (let i = 0; i < route.length; i++) {
    newArray.push(route[i]);
    if (i < route.length-1) {
      newArray.push('->');
    }
  }
  newArray.push('->');
  return newArray;
};

const possibleRoutes = getRoute();

const PossibleRoutes = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const routes = [];
    if (props.origin && props.origin.length>0) {
      routes.push(props.origin);
    }

    for (let i = 0; i < possibleRoutes.length; i++) {
      const newRoute = addArrows(possibleRoutes[i]);
      routes.push(newRoute);
    }

    if (props.destination && props.destination.length>0) {
      routes.push(props.destination);
    }

    setData(routes);
  }, []);

  const handleClick = (event) => {

  };

  return (
    <div className="possibleRoutes">
      <Link to="/Home">&#60;</Link>
      
      <h1>possible routes</h1>
      <section className="content">
        {data.map(route => (
          <section className="route">Origin {route} Destination
            <button>select</button>
          </section>
        ))}
      </section>
    </div>
  );
};

export default PossibleRoutes;