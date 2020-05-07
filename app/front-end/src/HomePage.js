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
        <label id = "From-bar">
          <div id = "From-text">From</div>
          <input name="origin" onChange={originHandleChange} type = "text" style ={{width: 300}}/>
        </label>
        <label id = "To-bar">
          <div id ="To-text"> To</div>
          <input name="desto" onChange={destinationHandleChange} type = "text" style ={{width: 300}}/>
        </label>
        <input type="submit" style={{marginLeft: 10}} value="GO" />
      </form>
      <img src = {mapUrl} alt = "Map of NYC"/>
    </div>
  );
}
  export default HomePage;
