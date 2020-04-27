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
        //...state,
        [e.target.name]: value
      });
  
      console.log("hello");
    
    // e.target.value.replace(/ /g,'+'); 
    // this.setState({ [e.target.name]: e.target.value})
  }

  submitHandler = (e) => {

    const url = 'https://maps.googleapis.com/maps/api/directions/json?origin='+this.state.origin+'&destination='+this.state.destination+'+New+York,+NY&mode=transit&alternatives=true&key=API_KEY'
    e.preventDefault()
    console.log(this.state)
    axios.post(url, this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => { 
        console.log(error)
      })
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
          <input type = "text" name="origin" value={this.state.origin} onChange={this.changeHandler}  style ={{width: 300}}/>
        </label>
        <label id = "To-bar">
          <div id ="To-text"> To</div>
          <input type = "text" name="destination" value={this.state.destination} onChange={this.changeHandler}  style ={{width: 300}}/>

        </label>


        <Link to={`/possibleRoutes/${origin}`}>
          <input type="submit" style = {{marginLeft: 10}} value="GO" />
        </Link>
      </form>
          </header>
          <CityMap></CityMap>
        </div>
        
      );
    }
  }

/*function SearchBox(props) {*/

  /*const [origin, setOrigin] = useState("");
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
    */
    /*return (
      <form onSubmit = {this.submitHandler} className = "Search-form">
        <label id = "From-bar">
          <div id = "From-text">From</div>
          <input name="origin" value={origin} onChange={this.changeHandler} type = "text" style ={{width: 300}}/>
        </label>
        <label id = "To-bar">
          <div id ="To-text"> To</div>
          <input name="desto" value={desto} onChange={this.changeHandler} type = "text" style ={{width: 300}}/>

        </label>


        <Link to={`/possibleRoutes/${origin}`}>
          <input type="submit" style = {{marginLeft: 10}} value="GO" />
        </Link>
      </form>
    )
  }*/
  function CityMap() {
    return(
      <div className = "map">
        <img src = "https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=1200x800&maptype=roadmap&key=insertKey" alt = "Map of NYC"/>
      </div>
    )
  }

  export {HomePage}