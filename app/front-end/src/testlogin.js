import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Login.css'
import { slide as Menu } from 'react-burger-menu'

function LoginForm(){
  
      return(
        <header id='login'>
        <div>
        <Menu>
            
                <p>HomePage</p>
            
        </Menu>
          <h2>Welcome</h2>
          <h3>Sign In</h3>
          <form id='login' method = 'POST'>
          Email  <input type='email' id = 'inputEmail'name='email'/><br/>
          Password<input type='password' id='inputPassword' name='loginEmail'/><br/>
          <input type='submit' value='Sign In' />
          </form>
    
        </div>
        <Link to='/SignUp'>Sign Up</Link>
        </header>
    
      );
    
  
  }

  export default LoginForm;