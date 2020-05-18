import React from 'react';
import './HomePage.css';
import Hamburger from './hamburgerMenu.js';
import Toolbar from './toolbar.js';

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
      <Toolbar/>
  
      <div className='homeForm'>
      <form onSubmit={handleSubmit} className = "Search-form">
        <div className='homeContainer'>
        <label for="origin"><b>From</b></label>
        <input type='text' id='origin' name='origin' className='originI' onChange={originHandleChange}/><br/>

        <label for="destination"><b>To</b></label> 
        <input type='text' id='destination' name='destination' className='destinationI' onChange={destinationHandleChange}/><br/>
    
        <button  type='submit'>Go</button>
        </div>  
      </form>
      </div>
    </header>
    
  );
}
  export default HomePage;
