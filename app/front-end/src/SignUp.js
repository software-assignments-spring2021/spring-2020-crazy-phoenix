import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './SignUp.css';

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
            const url = `http://localhost:3000/signup/?firstname=${first}&lastname=${last}&email=${email}&password=${password}`;
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
        <header id='signup'>
        <div>
            <h2>Welcome</h2>
            <h1>Create An Account</h1>
            <form type='text' onSubmit={handleSubmit}>
                First Name <input type='text' id='firstName' onChange={firstHandleChange}/><br/>
                Last Name <input type='text' id='lastName' onChange={lastHandleChange}/><br/>
                Username <input type='text' id='username'/><br/>
                Email <input type='email' id='signUpEmail' onChange={emailHandleChange}/><br/>
                Password <input type='password' id='signUpPassword' onChange={passwordHandleChange}/><br/>
                Confirm Password <input type='password' id='confirmPassword' onChange={password2HandleChange}/><br/>
                <input type="submit" value="Sign Up!"/>
            </form>
        </div>
        </header>
    )
}

export default SignupForm;