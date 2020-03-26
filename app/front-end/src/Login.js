import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Login.css'
import ToggleButton from'./ToggleButton.js'

function LoginForm(props){
  
      return(
        <header id='login'>
        <div>
        <div className='hamburgerMenu'>
           <ToggleButton click={props.hamburgerHandler}/>
        </div>
          <h2>Welcome</h2>
          <h3>Sign In</h3>
          <form id='login' method = 'POST'>
          Email  <input type='email' id = 'inputEmail'name='email'/><br/>
          Password<input type='password' id='inputPassword' name='loginEmail'/><br/>
          <Link to='/Home'>
          <input type='submit' value='Sign In'/>
          </Link>
          </form>
    
        </div>
        <Link to='/SignUp' id = "signupLink">Sign Up</Link>
        </header>
    
      );
    
  
  }

  export default LoginForm;