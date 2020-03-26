import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupForm from './SignUp.js';
import LoginForm from './Login.js';
import HomePage from './HomePage.js';
import DetailedRoute from './DetailedRoute.js';
import Profile from './UserProfile.js';

class App extends Component {
    state = {
      hamburgerOpen: false
    };
    hamburgerHandler = () => {
      this.setState((prevState) => {
        return {hamburgerOpen: !prevState.hamburgerOpen};
      });
    };

    render(){
    let hamburger;

    if(this.state.hamburgerOpen){
      hamburger = <Profile hamburgerHandler={this.hamburgerHandler}/>;
    }
    return (
      <div className="App">
      <Router>
      <Switch>
        {/* <header className="App-header"> */}
        <Route path="/Login">
          <LoginForm hamburgerHandler={this.hamburgerHandler}/>
          {hamburger}
        </Route>
        <Route path="/SignUp">
          <SignupForm/> 
        </Route>
        <Route path="/UserProfile">
          <Profile/> 
        </Route>
      
        {/* </header> */}
        <Route path = "/Home">
          <HomePage></HomePage>
        </Route>
        <Route path = "/Route">
          <DetailedRoute></DetailedRoute>
        </Route>
      </Switch>
      </Router>
                
      </div>
    );
    }
}
    
export default App;

