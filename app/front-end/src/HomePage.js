import React, {Component, useState, useEffect} from 'react';
import {Redirect, Route, Link} from 'react-router-dom';
import axios from 'axios'
import './HomePage.css';
import { slide as Menu } from 'react-burger-menu'
import PossibleRoutes from './possibleRoutes';

class HomePage extends Component{
    
  constructor(props){
    super(props)
    
    this.state={
      origin:'',
      destination:'', 
    }
  }

  changeHandler = (e) =>{
      const value = e.target.value;
      this.setState({
        [e.target.name]: value
      });
  
      console.log("hello");
  }

  submitHandler = (e) => {

  axios.post('http://localhost:3000/data', {

    origin: this.state.origin,
    destination: this.state.destination

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


  render(){
    const {origin, destination} = this.state
    return (
        <div className="home">
          <header className="App-header">
          <Menu id = "Burger">
          </Menu>
          <form onSubmit = {this.submitHandler} className = "Search-form">
        <label id = "From-bar">
          <div id = "From-text">From</div>
          <input type = "text" name="origin" value={this.state.value} onChange={this.changeHandler}style ={{width: 300}}/>
        </label>
        <label id = "To-bar">
          <div id ="To-text"> To</div>
          <input type = "text" name="destination" value={this.state.value} onChange={this.changeHandler}  style ={{width: 300}}/>


        </label>
        
        <input type="submit" style = {{marginLeft: 10}} value="GO" />


        
      </form>
          </header>
          <CityMap></CityMap>
        </div>
        
      );
    }
  }

  function CityMap() {
    return(
      <div className = "map">
        <img src = "https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=1200x800&maptype=roadmap&key=insertKey" alt = "Map of NYC"/>
      </div>
    )
  }

  export {HomePage}