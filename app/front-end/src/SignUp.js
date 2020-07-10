import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './SignUp.css';
import appLogo from './appLogo.png';

// TODO: username field is not used (might be wise to remove)
let first, last, email, password, password2;
const firstHandleChange = (event) => {
    first = event.target.value;
};
const lastHandleChange = (event) => {
    last = event.target.value;
};
const emailHandleChange = (event) => {
    email = event.target.value;
};
const passwordHandleChange = (event) => {
    password = event.target.value;
};
const password2HandleChange = (event) => {
    password2 = event.target.value;
};

function SignupForm(props){
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!first || !last || !email || !password || !password) {
            alert('missing field(s)');
        } else if (password !== password2) {
            alert('passwords do not match');
        } else {
            const url = `http://localhost:9000/signup/?firstname=${first}&lastname=${last}&email=${email}&password=${password}`;
            fetch(url)
              .then(res => res.text())
              .then(res => {
                  if (res === 'added') {
                      props.action();
                  } else {
                      alert('error adding your account');
                  }
              })
              .catch(err => err);
        }
    };
    return(
        <header id='login'>

        <div className='container'>
        <div className='blur'>
        <div className='welcome'>
        <h1 id='welcome'>Welcome To Mobility</h1>
        <h3 id='please'>Sign Up and Get Going</h3>
        </div>
        
        </div>
          

        
          <div className='form'>
          
          <form id='login' className='signupForm' onSubmit={handleSubmit}>
                <div class="logocontainer">
                    <img src={appLogo} alt="Avatar" class="avatar"></img>
                </div>
                <div class ='container'>
                    <label for="email"><b>First Name</b></label>
                    <input type='text' id='firstName'  className='signupI'onChange={firstHandleChange}/><br/>
           
                    <label for="loginEmail"><b>Last Name</b></label>
                    <input type='text' id='lastName' className='signupI' onChange={lastHandleChange}/><br/>
                    
                    <label for="loginEmail"><b>Email</b></label>
                    <input type='text' id='signUpEmail'  className='signupI' onChange={emailHandleChange}/><br/>

                    <label for="loginEmail"><b>Password</b></label>
                    <input type='password' id='password'  className='signupI' onChange={passwordHandleChange}/><br/>
                        
                    <label for="loginEmail"><b>Confirm Password</b></label>
                    <input type='password' id='confirmPassword'  className='signupI' onChange={password2HandleChange}/><br/>

                    <button  type='submit'>Sign Up</button>
                </div>
            </form>
        
          </div>
          
        </div>
        <div id='signinOpt'>Already have an account?</div>
        <a id="signin-opt" href="/Login"> Sign In </a>
        </header>

    )
}

export default SignupForm;
