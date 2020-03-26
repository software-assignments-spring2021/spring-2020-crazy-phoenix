import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import SignupForm from './SignUp.js'
import LoginForm from './Login.js'
import Toolbar from './toolbar.js'
import './App.css';


function App() {
  
  //<button onClick={this.Toggle.bind(this, check)} id='SingUpButton'>Sign Up</button>

    return (
      <div className="App">
      
    
      <Toolbar/>
                
      </div>
    );
  
}



export default App;
