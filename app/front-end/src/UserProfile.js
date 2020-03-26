import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './UserProfile.css'

function Profile(props){
    return(
        <nav className= 'drawer'>
            <ul>
                <li>Name: Lorem Ipsum</li>
                <li>Username: loremsum_iptus</li>
                <li><button onClick= {props.hamburgerHandler}>Sign Out</button></li>
            </ul>
        </nav>
    )

}

export default Profile;