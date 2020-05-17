import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Toolbar.css';
import Hamburger from './hamburgerMenu.js';


function Toolbar(){
    return(
        <div className="navBar">
		      <Hamburger/>
		      <a href="/Home"><h1 id="appname">Mobility</h1></a>
              <img id="applogo" src="./appLogo.png"/>
		    </div>
    )
}

export default Toolbar;