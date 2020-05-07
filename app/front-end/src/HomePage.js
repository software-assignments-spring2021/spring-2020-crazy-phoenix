import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';
import { slide as Menu } from 'react-burger-menu'
import PossibleRoutes from './possibleRoutes';
import background from './backgroundImage.jpg';

import key from './config';
const apiKey = key.API_KEY;
const mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=1200x800&maptype=roadmap&key=AIzaSyDx0uVQTk3Ukph1ph9ppl97vC3M7rVKJ6U' + apiKey;


let origin, destination;
const originHandleChange = (e) => {
  origin = e.target.value;
};
const destinationHandleChange = (e) => {
  destination = e.target.value;
};

function HomePage(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    props.action(origin, destination);
  };

  return (
    
    <header className='home'>

      <div className='homeForm'>
      <form onSubmit={handleSubmit} className = "Search-form">
        <div className='homeContainer'>
        <label for="origin"><b>From</b></label>
        <input type='text' id='origin' name='origin' onChange={originHandleChange}/><br/>

        <label for="destination"><b>To</b></label> 
        <input type='text' id='destination' name='destination' onChange={destinationHandleChange}/><br/>

        <button  type='submit'>Go</button>
        </div>  
      </form>
      </div>
    </header>
    
  );
}
  export default HomePage;
