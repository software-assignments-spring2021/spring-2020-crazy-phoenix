import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import SignupForm from './SignUp.js'
import LoginForm from './Login.js'
import './App.css';

function App() {
  /*
  return (
    <div className="App">
      <header className="App-header">
        <p className="back_icon">&#60;</p>

        <div className="query_box">
          <input type="text"/>
          <input type="text"/>
        </div>

        <div className="search">
          <input type="submit" value="GO"/>
        </div>


        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="content">

        <div className="route">
          <p>direction with subway logos</p>
          <a href="https://google.com" className="App-link">select</a>
        </div>
        <div className="route">
          <p>direction with subway logos</p>
          <a href="https://google.com" className="App-link">select</a>
        </div>
        <div className="route">
          <p>direction with subway logos</p>
          <a href="https://google.com" className="App-link">select</a>
        </div>
      </div>

      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );*/
  
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
