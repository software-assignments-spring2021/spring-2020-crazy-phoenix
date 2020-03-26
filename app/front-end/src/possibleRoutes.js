import React, {Component, useState, useEffect} from 'react';
//import axios from 'axios';
import './possibleRoutes.css';
import {SearchBox, ORIGIN, DESTINATION} from './HomePage';



const getRoute = () => {
  const subwayLines = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'G', 'N', 'Q', 'R', 'J', 'Z', 'L', 'S', 'G'];
  const randomLength = 0;
  const randomRoutesListLength = 0; // show 1-5 possible routes
  const randomRoutes = [];

  return randomRoutes;
};


const ROUTES = [['1', '2', '3'], ['A', 'N', 'Q']];

const addArrows = (route) => {
  const newArray = [];
  for (let i = 0; i < route.length; i++) {
    newArray.push(route[i]);
    if (i < route.length-1) {
      newArray.push('->');
    }
  }
  return newArray;
};











const PossibleRoutes = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {

    //const subwayLines = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'G', 'N', 'Q', 'R', 'J', 'Z', 'L', 'S', 'G'];
    //setData(subwayLines);
    const routes = [];
    for (let i = 0; i < ROUTES.length; i++) {
      const newRoute = addArrows(ROUTES[i]);
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
          <section className="route">Origin {route} Destination</section>
          // link to route details page
        ))}


      </section>
    </div>
  );
};

export default PossibleRoutes;