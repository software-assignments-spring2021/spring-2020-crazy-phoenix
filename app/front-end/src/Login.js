import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Login.css'
import ToggleButton from'./ToggleButton.js'

let email, password, redirect;
const emailHandleChange = (event) => {
  email = event.target.value;
};
const passwordHandleChange = (event) => {
  password = event.target.value;
};


function LoginForm(props){
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/authenticate/?email=' + email + '&password=' + password;
    fetch(url)
      .then(res => res.text())
      .then(res => {
        if (res === 'authenticated') {
          console.log('got correct from backend!');
          props.action();
        } else {
          alert('incorrect pair of email and password');
        }
      })
      .catch(err => err);
  };
  
      return(
        <header id='login'>
        <div>
          <div className='hamburgerMenu'>
             <ToggleButton click={props.hamburgerHandler}/>
          </div>
          <h2>Welcome</h2>
          <h3>Sign In</h3>
          <form id='login' onSubmit={handleSubmit}>
            Email  <input type='email' id='inputEmail' name='email' onChange={emailHandleChange}/><br/>
            Password<input type='password' id='inputPassword' name='loginEmail' onChange={passwordHandleChange}/><br/>
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