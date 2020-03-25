import React from 'react';

function HomePage(){
    return (
        <div className="App">
          <header className="App-header">
          <button type = "button">
           Home
          </button>
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
    return ( 
      <form onSubmit = {handleClick() } className = "Search-form">
        <label>
          From:
          <input type = "text" style ={{width: 300}} />
          
        </label>
        <label>
          To:
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