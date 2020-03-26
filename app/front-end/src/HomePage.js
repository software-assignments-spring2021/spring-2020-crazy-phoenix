import React from 'react';
import './HomePage.css';
import { slide as Menu } from 'react-burger-menu'

function HomePage(){
    return (
        <div className="home">
          <header className="App-header">
          <Menu id = "Burger">
          </Menu>
          <SearchBox></SearchBox>
          </header>
          <CityMap></CityMap>
        </div>
        
      );
}

function SearchBox() {
    function handleClick(from, to){
      console.log("from");
      console.log("to");
    }
    let fromtext = "";
    let totext = "";
    return ( 
      <form onSubmit = {handleClick() } className = "Search-form">
        <label id = "From-bar">
          <div id = "From-text">
          From
          </div>
          <input type = "text" style ={{width: 300}}/>
          
        </label>
        <label id = "To-bar">
          <div id ="To-text">
          To
          </div>
          <input type = "text" style ={{width: 300}}/>
  
          <input type="submit" style = {{marginLeft: 10}} value="GO" />
        </label>
        
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

  export default HomePage;