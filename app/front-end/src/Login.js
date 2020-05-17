import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import appLogo from  './appLogo.png'
import './Login.css'
import ToggleButton from'./ToggleButton.js'

let email, password, redirect;
const emailHandleChange = (event) => {
  email = event.target.value;
};
const passwordHandleChange = (event) => {
  password = event.target.value;
};
const divStyle = {
  backgroundColor: 'white smoke'

};


function LoginForm(props){
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:9000/authenticate/?email=' + email + '&password=' + password;
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

        <div className='container'>
        <div className='blur'>
        <div className='welcome'>
        <h2>Welcome</h2>
        </div>
        
        </div>
          

        
          <div className='form'>
          




         
         
         
          <form id='login' className='loginForm' onSubmit={handleSubmit}>
          <div class="logocontainer">
          <img src={appLogo} alt="Logo" class="avatar"></img>
          </div>
          <div class ='container'>
            <label for="email"><b>Email</b></label>
            <input type='text' id='inputEmail' name='email' className='usernameI' onChange={emailHandleChange}/><br/>
           
            <label for="loginEmail"><b>Password</b></label>
            <input type='password' id='inputPassword' name='password' className='passwordI' onChange={passwordHandleChange}/><br/>
           
            <button  type='submit'>Login</button>
          </div>

          </form>
        

        
         
          </div>
          
        </div>
        <Link to='/SignUp' id = "signupLink">Sign Up</Link>
        </header>
    
      );
    
  
  }

  export default LoginForm;