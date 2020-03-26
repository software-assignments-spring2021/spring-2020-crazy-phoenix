import React, {Component, useState, useEffect} from 'react';
//import axios from 'axios';
import './possibleRoutes.css';



const getRoute = () => {
  const subwayLines = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'G', 'N', 'Q', 'R', 'J', 'Z', 'L', 'S', 'G'];
  const randomLength = 0;
  const randomListLength = 0;
  const randomRoutes = [];

};















const PossibleRoutes = (props) => {
  const [data, setData] = useState([]);

  return (
    <div className="possibleRoutes">
      <h1>possible routes</h1>
    </div>
  );
};

export default PossibleRoutes;