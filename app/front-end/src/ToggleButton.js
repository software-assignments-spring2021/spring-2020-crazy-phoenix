import React from 'react';
import './ToggleButton.css'
import LoginForm from './Login.js'
function ToggleButton(props){
    return(
    <div>
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-line'></div>
        <div className='toggle-line'></div>
        <div className='toggle-line'></div>
    </button>
    </div>
    )
};

export default ToggleButton;