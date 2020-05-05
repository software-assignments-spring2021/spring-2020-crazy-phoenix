import React, {Component, useState, useEffect} from 'react';
import './possibleRoutes.css';
import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom"

// return string of route to display
const getShortRoute = (routeObjectString) => { console.log(routeObjectString);
  const object = JSON.parse(routeObjectString);
  const legs = object.legs;
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
  return routePath;
};

const PossibleRoutes = (props) => {
  // get origin and destination from /home

  const routes = props.location.state;
  // array of routes (object)
  const routesList = routes.routes;
  /*
  // array of routes (string)
  const finalRoutesList = [];
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
  console.log(finalRoutesList);*/


  // route object array -> routeObjectString array (mapped)
  const routeObjectStringArray = [];
  for (let i = 0; i < routesList.length; i++) {
    const string = JSON.stringify(routesList[i]);
    routeObjectStringArray.push(string);
  }



  return (
    <div className="possibleRoutes">
      <Link to="/Home">&#60;</Link>
      <h1>possible routes</h1>
      <section className="content">
        {routeObjectStringArray.map(routeString => (
          <section className="route">{getShortRoute(routeString)}
           <Link to={{pathname: '/Route', state: {routeString}}}>select</Link>
          </section>
        ))}
      </section>
    </div>
  );
};

export default PossibleRoutes;

// <button name={route} onClick={handleClickButton}>select</button>