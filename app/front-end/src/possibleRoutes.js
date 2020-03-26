import React, {Component, useState, useEffect} from 'react';
//import axios from 'axios';
import './possibleRoutes.css';



const getRoute = () => {
  const subwayLines = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'G', 'N', 'Q', 'R', 'J', 'Z', 'L', 'S', 'G'];
  const randomLength = 0;
  const randomRoutesListLength = 0; // show 1-5 possible routes
  const randomRoutes = [];

  return randomRoutes;
};















const PossibleRoutes = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {

    //const subwayLines = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'G', 'N', 'Q', 'R', 'J', 'Z', 'L', 'S', 'G'];
    //setData(subwayLines);
    const routes = [['1', '2', '3'], ['A', 'N', 'Q']];
    setData(routes);
  }, []);

  return (
    <div className="possibleRoutes">
      <h1>possible routes</h1>
      <section className="content">
        {data.map(route => (
          <section className="route">{route}</section>
          // link to route details page
        ))}


      </section>
    </div>
  );
};

export default PossibleRoutes;