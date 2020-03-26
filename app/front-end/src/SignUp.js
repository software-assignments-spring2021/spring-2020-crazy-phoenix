import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function SignupForm(){
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

export default SignupForm;