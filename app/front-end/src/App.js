import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import SignupForm from './SignUp.js';
import LoginForm from './Login.js';
import './App.css';
import HomePage from './HomePage.js';
import DetailedRoute from './DetailedRoute.js';

function App(props) {

    return (
      <div className="App">
      <Router>
      <Switch>
        {/* <header className="App-header"> */}
        <Route path="/Login">
          <LoginForm/>
          <Link to='/SignUp'>Sign Up</Link>
        </Route>
        <Route path="/SignUp">
          <SignupForm/>
          <Link to='/Login'>Login</Link>
        </Route>
        
        {/* </header> */}
        <Route path = "/Home">
          <HomePage></HomePage>
        </Route>
      </Switch>
      </Router>
                
      </div>
  //    <HomePage></HomePage>
    );
  
}

export default App;
