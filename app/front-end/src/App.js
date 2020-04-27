import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupForm from './SignUp.js';
import LoginForm from './Login.js';
import {HomePage} from './HomePage.js';
import DetailedRoute from './DetailedRoute.js';
import Profile from './UserProfile.js';
import PossibleRoutes from './possibleRoutes';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import logo from './logo.svg';
import './App.css';

/*
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

        <Route path = "/Home">
          <HomePage></HomePage>
        </Route>
        <Route path="/Login" render={() => <LoginContainer isCorrect={false}/>}>
          <LoginForm hamburgerHandler={this.hamburgerHandler}/>
          {hamburger}
        </Route>
        <Route path="/SignUp" render={() => <SignUpContainer isFilled={false}/>}>
          <SignupForm/> 
        </Route>
        <Route path="/UserProfile">
          <Profile/> 
        </Route>
      

        <Route path = "/Route">
          <DetailedRoute></DetailedRoute>
        </Route>

        <Route path="/possibleRoutes">
          <PossibleRoutes/>
        </Route>
      </Switch>
      </Router>
                
      </div>
    );
    }
}*/

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path = "/Home">
            <HomePage/>
          </Route>
          <Route path="/Login" render={() => <LoginContainer isCorrect={false}/>}>
          </Route>
          <Route path="/SignUp" render={() => <SignUpContainer isFilled={false}/>}>
            <SignupForm/>
          </Route>
          <Route path="/UserProfile">
            <Profile/>
          </Route>


          <Route path = "/Route">
            <DetailedRoute/>
          </Route>

          <Route path="/possibleRoutes">
            <PossibleRoutes/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
    
export default App;
