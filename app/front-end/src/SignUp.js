import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './SignUp.css';

function SignupForm(){
    return(
        <div>
            <h2>Welcome</h2>
            <h1>Create An Account</h1>
            <form type='text' method='POST'>
            First Name <input type='text' id='firstName'/><br/>
            Last Name <input type='text' id='lastName' /><br/>
            Username <input type='text' id='username' /><br/>
            Email <input type='email' id='signUpEmail'/><br/>
            Password <input type='password' id='signUpPassword'/><br/>
            Confirm Password <input type='password' id='confirmPassword'/><br/> 

            </form>
        </div>
    )
}

export default SignupForm;
