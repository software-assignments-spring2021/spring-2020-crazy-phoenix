
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import SignupForm from './SignUp.js'
import LoginForm from './Login.js'
import './App.css';
import HomePage from './HomePage.js';

function App() {
  
  //<button onClick={this.Toggle.bind(this, check)} id='SingUpButton'>Sign Up</button>

    return (
      <div className="App">
      <Router>
      <Switch>
        <header className="App-header">
        <Route path="/Login">
          <LoginForm/>
          <Link to='/SignUp'>Sign Up</Link>
        </Route>
        <Route path="/SignUp">
          <SignupForm/>
          <Link to='/Login'>Login</Link>
        </Route>
        </header>
      </Switch>
      </Router>
                
      </div>
    );
}

export default App;
