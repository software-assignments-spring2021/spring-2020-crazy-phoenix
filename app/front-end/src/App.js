import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage.js';

function App() {
  return (
    <HomePage></HomePage>
  );
}

// function DetailedRoute(){
//   const min = 2;
//   const max = 6;
//   let numRoutes = Math.floor(Math.random() * (+max - +min)) + +min;
//   routes = []
//   const r = <div className = "Stop">Stop Name</div>
//   for (let i=0; i<numRoutes; i++){
//       routes.push(r)  
//   }
//   return(
//     <div className = "Stops">
//       {routes}
//     </div>
//   )
// }

export default App;
