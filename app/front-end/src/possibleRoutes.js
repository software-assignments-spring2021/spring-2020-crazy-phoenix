import React, {Component, useState, useEffect} from 'react';
//import axios from 'axios';
import './possibleRoutes.css';
import {SearchBox, ORIGIN, DESTINATION} from './HomePage';
import { Redirect, Link } from "react-router-dom";
import {DetailedRoute} from './DetailedRoute';



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


const ROUTES = [['1', '2', '3'], ['A', 'N', 'Q']];

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

    //const subwayLines = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'G', 'N', 'Q', 'R', 'J', 'Z', 'L', 'S', 'G'];
    //setData(subwayLines);
    const routes = [];
    for (let i = 0; i < possibleRoutes.length; i++) {
      const newRoute = addArrows(possibleRoutes[i]);
      routes.push(newRoute);
    }

    setData(routes);
  }, []);

  return (
    <div className="possibleRoutes">
      <SearchBox/>
      <h1>possible routes</h1>
      <section className="content">
        {data.map(route => (
          <section className="route">Origin {route} Destination
            <Link to="/Route">select</Link>
          </section>
          // link to route details page

        ))}


      </section>
    </div>
  );
};

export default PossibleRoutes;