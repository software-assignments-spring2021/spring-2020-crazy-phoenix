import React, {Component, useState, useEffect} from 'react';
import './possibleRoutes.css';
import { ORIGIN, DESTINATION} from './HomePage';
import {Link} from "react-router-dom";
import DetailedRoute from './DetailedRoute';
import queryString from 'querystring';
import Redirect from "react-router-dom/es/Redirect";

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

const PossibleRoutes = (props) => {
  // get origin and destination from /home

  const routes = props.location.state;
  const handleClick = (event) => {
    const detailedRoute = event.target.name;
    props.action(detailedRoute);
  };

  const handleClickButton = (event) => {
    //props.action(routes[0]);
    console.log(routes);
  }
  const finalRoutesList = [];

  const routesList = routes.routes;
  for (let i = 0; i < routesList.length; i++) {
    const legs = routesList[i].legs;

    let routePath = '';
    for (let j = 0; j < legs.length; j++) {
      const steps = legs[j].steps;
      for (let k = 0; k < steps.length; k++) {
        if (steps[k].travel_mode === 'TRANSIT') {
          routePath += steps[k].transit_details.arrival_stop.name;
          routePath += ' subway ---> ';
          routePath += steps[k].transit_details.departure_stop.name;
        } else {
          routePath += steps[k].travel_mode;
        }
        routePath += '->';
      }
    }
    finalRoutesList.push(routePath);
  }
  console.log(finalRoutesList);


  return (
    <div className="possibleRoutes">
      <Link to="/Home">&#60;</Link>
      
      <h1>possible routes</h1>
      <section className="content">
        {finalRoutesList.map(route => (
          <section className="route">{route}
           <Link to={{pathname: '/Route', state: {route}}}>select</Link>
          </section>
        ))}
      </section>
      <Link to={{
        pathname: '/Route',
        state: {routes: props.location.state}
      }}>data transfer</Link>
      <Link to='/Route' detailedRoute={routes} onClick={handleClickButton}>transfer data</Link>
      <button onClick={handleClickButton}>transfer data</button>
    </div>
  );
};

export default PossibleRoutes;

// <button name={route} onClick={handleClickButton}>select</button>