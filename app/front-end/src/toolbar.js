import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Toolbar.css';


function Toolbar(){
    return(
        <header id='toolbar'>
            <nav>
                <div>
                <p>Testing</p>
                </div>
                <div>
                    <p>one two one two</p>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;