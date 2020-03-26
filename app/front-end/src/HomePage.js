import React, {Component, useState, useEffect} from 'react';
import {Redirect, Route, Link} from 'react-router-dom';
import './HomePage.css';
import { slide as Menu } from 'react-burger-menu'
import PossibleRoutes from './possibleRoutes';

function HomePage(){
    return (
        <div className="App">
          <header className="App-header">
          <Menu id = "Burger">
            <a id="account" className="menu-item" href="/">Account</a>
            <h1>Hello</h1>
          </Menu>
          <SearchBox></SearchBox>
          </header>
          <CityMap></CityMap>
        </div>
        
      );
}

function SearchBox(props) {

  const [origin, setOrigin] = useState("");
    const handleClick = (event) => {
      event.preventDefault();
      //props.origin = origin;
      //props.destination = destination;

      //alert(`origin: ${origin}\ndestination: ${destination}`);
      //return <Redirect to={{pathname: "/possibleRoutes", state: {origin: origin, destination: destination}}}/>;

    };
  const [destination, setDestination] = useState("");

    let fromtext = "";
    let totext = "";
    return (
      <form onSubmit = {handleClick} className = "Search-form">
        <label id = "From-bar">
          <div id = "From-text">From</div>
          <input name="origin" value={origin} onChange={e => setOrigin(e.target.value)} type = "text" style ={{width: 300}}/>
        </label>
        <label id = "To-bar">
          <div id ="To-text"> To</div>
          <input name="destination" value={destination} onChange={e => setDestination(e.target.value)} type = "text" style ={{width: 300}}/>

        </label>


        <Link to={`/possibleRoutes/${origin}`}>
          <input type="submit" style = {{marginLeft: 10}} value="GO" />
        </Link>
      </form>
    )
  }
  function CityMap() {
    return(
      <div className = "map">
        <img src = "NYCSubway.jpg" alt = "Map of NYC"/>
      </div>
    )
  }

  export {HomePage, SearchBox}