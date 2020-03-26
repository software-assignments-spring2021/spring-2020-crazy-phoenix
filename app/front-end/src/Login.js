import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Login.css';

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

  export default LoginForm;