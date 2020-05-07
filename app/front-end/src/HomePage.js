import React from 'react';
import './HomePage.css';
import { slide as Menu } from 'react-burger-menu'
import PossibleRoutes from './possibleRoutes';



//const apiKey = key.API_KEY;

const apiKey = process.env.API_KEY;
const mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=1200x800&maptype=roadmap&key=' + apiKey;


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
    <div className = "map">
      <Menu id = "Burger">
      </Menu>
      <form onSubmit={handleSubmit} className = "Search-form">

        <div className='homeContainer'>
        <label for="origin"><b>From</b></label>
        <input type='text' id='origin' name='origin' className='originI' onChange={originHandleChange}/><br/>

        <label for="destination"><b>To</b></label> 
        <input type='text' id='destination' name='destination' className='destinationI' onChange={destinationHandleChange}/><br/>

        <button  type='submit'>Go</button>
        </div>  

      </form>
      <img src = {mapUrl} alt = "Map of NYC"/>
    </div>
  );
}
  export default HomePage;
