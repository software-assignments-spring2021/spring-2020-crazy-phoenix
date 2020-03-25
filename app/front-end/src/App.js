import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import SignupForm from './SignUp.js'
import LoginForm from './Login.js'
import './App.css';

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

function LoginForm(){

    return(
      <div>
        <h2>Welcome</h2>
        <h3>Sign In</h3>
        <form id='login' method = 'POST'>
        Email  <input type='email' id = 'inputEmail'name='email'/><br/>
        Password<input type='password' id='inputPassword' name='loginEmail'/><br/>
        <input type='submit' value='Sign In' />
        </form>
  
      </div>
  
    );
  

}

function SignUpForm(){
  return(
      <div>
          <h2>Welcome</h2>
          <h1>Create An Account</h1>
          <form type='text' method='POST'>
          First Name: <input type='text' id='firstName'/><br/>
          Last Name: <input type='text' id='lastName' /><br/>
          </form>
      </div>
  )
}

export default App;
