import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupForm from './SignUp.js';
import LoginForm from './Login.js';
import HomePage from './HomePage.js';
import DetailedRoute from './DetailedRoute.js';
import Profile from './UserProfile.js';
import PossibleRoutes from './possibleRoutes';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import logo from './logo.svg';
import './App.css';
import HomePageContainer from "./HomePageContainer";
import PossibleRoutesContainer from './PossibleRoutesContainer';
/*
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
    }*/
    

class App extends Component{
  
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
      hamburger = <Profile hamburgerHanlder={this.hamburgerHandler}/>
    }
    return (
      <div className="App">
        <Router>
          <Switch>
  
            <Route path="/Home" render={() => <HomePageContainer origin={''} destination={''} hamburgerHandler={this.hamburgerHandler}/>}>
            {hamburger}
            </Route>
            <Route path="/Login" render={() => <LoginContainer isCorrect={false}/>}>
            </Route>
            <Route path="/SignUp" render={() => <SignUpContainer isFilled={false}/>}>
            </Route>
            <Route path="/UserProfile">
              <Profile/>
            </Route>
  
  
            <Route path = "/Route" component={DetailedRoute}>
            </Route>
  
            <Route path="/possibleRoutes" component={PossibleRoutes}>
            </Route>
          </Switch>
        </Router>
  
      </div>
    );
  }
  
}
    
export default App;
