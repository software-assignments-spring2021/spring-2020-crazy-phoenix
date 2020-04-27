import React, {Component, useState, useEffect} from 'react';
import {Redirect, Route, Link} from 'react-router-dom';
import axios from 'axios'
import './HomePage.css';
import { slide as Menu } from 'react-burger-menu'
import PossibleRoutes from './possibleRoutes';

import key from './config';
const apiKey = key.API_KEY;
const mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=1200x800&maptype=roadmap&key=' + apiKey;


let origin, destination;
const originHandleChange = (e) => {
  origin = e.target.value;
};
const destinationHandleChange = (e) => {
  destination = e.target.value;
};
const handleSubmit = (e) => {
  e.preventDefault();
  const url = 'https://maps.googleapis.com/maps/api/directions/json?origin='+origin+'&destination='+destination+'+New+York,+NY&mode=transit&alternatives=true&key=' + apiKey;
  axios.post(url, {origin: origin, destination: destination})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
};

function HomePage(props) {
  return (
    <div className = "map">
      <Menu id = "Burger">
      </Menu>
      <form onSubmit = {handleSubmit} className = "Search-form">
        <label id = "From-bar">
          <div id = "From-text">From</div>
          <input name="origin" onChange={originHandleChange} type = "text" style ={{width: 300}}/>
        </label>
        <label id = "To-bar">
          <div id ="To-text"> To</div>
          <input name="desto" onChange={destinationHandleChange} type = "text" style ={{width: 300}}/>
        </label>

        <Link to={`/possibleRoutes/${origin}`}>
          <input type="submit" style = {{marginLeft: 10}} value="GO" />
        </Link>
      </form>

      <img src = {mapUrl} alt = "Map of NYC"/>
    </div>
  );
}
  export {HomePage}