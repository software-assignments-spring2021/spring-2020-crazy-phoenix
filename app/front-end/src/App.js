import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupForm from './SignUp.js';
import LoginForm from './Login.js';
import {HomePage} from './HomePage.js';
import DetailedRoute from './DetailedRoute.js';
import PossibleRoutes from './possibleRoutes';
import logo from './logo.svg';
import './App.css';
/*
function App(props) {
  return (
    <div className="container">
      <Router>

        <Route path="/possibleRoutes">
          <PossibleRoutes/>
        </Route>

        <Route path="/">
        </Route>


      </Router>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/



/*
import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {expect} from "expect";
//import { Component } from 'react';
//import Component from React.Component;

//let map_origin = '';
//let map_destination = '';

//this.state = {map_origin: '', map_destination: ''};

// subway logo (store png files of logos a-f, 1-7) 13 logos total
const logoArray = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7'];



function getRandomRoute() {
  const SUBWAY_LINES = 13;
  //pick length (1-13)
  const LENGTH = 3;
  //pick logos (n=length)
  const randomLogos = ['1', 'a', 'f'];

  return randomLogos;
}

function getRouteList() {
  //generate random number 1-5 (min 1 route; max 5 routes)
  let listSize;

  let logoList = [[]];
  for (let i = 0; i < listSize; i++) {
    logoList[i] = getRandomRoute();
  }
  return logoList;
}


function getRouteProp(route) {
  const signObjList = (route) => {
    return route.forEach((sign) => {
      // determine imageSource based on sign
      const type = "subway";
      const imgObj = {imageSource: "", imageName: "", imageAlt: ""}; // filename must be injected
      const linkObj = {link: "", name: ""};
      const signObj = {type: type, name: sign, imageObject: imgObj, linkObject: linkObj};
      return signObj;
    });
  };

  const routeObj = () => {
    const arrow = {type: "arrow", imgObj: {imageSource: "", imageName: "", imageAlt: ""}}; // filename must be injected
    const array = [];
    for (let i = 0; i < signObjList.length; i++) {
      array.push(signObjList[i]);
      if (i < signObjList.length-1) {
        // attach arrow
        array.push(arrow);
      }
    }
    return array;
  };
  return routeObj;
}

const MAGIC_ROUTE = ['1', 'a', 'f'];
const getSignObjList = (route) => {
  return route.forEach((sign) => {
    // determine imageSource based on sign
    const type = "subway";
    const imgObj = {imageSource: "", imageName: "", imageAlt: ""}; // filename must be injected
    const linkObj = {link: "", name: ""};
    const signObj = {dummy: sign, type: type, name: "", imageObject: imgObj, linkObject: linkObj};
    return signObj;
  });
};

function getRouteComponent() {
//const routeComponent = () => {

  //list of sign objects (imgObj, linkObj. signObj)
  const signObjList = getSignObjList(MAGIC_ROUTE);
  const subwayImageComponent = imageProps => {
    return (
      <img src={imageProps.imageSource} className={imageProps.imageName} alt={imageProps.imageAlt} />
    );
  };

  //const imageComponentList = signObjList.forEach((signObj) => {
    //return subwayImageComponent(signObj.imgObj);
  //});


  const imageComponentList = [];
  for (let i = 0; i < signObjList.length; i++) {
    imageComponentList.push(signObjList[i].imgObj);
  }

  return (
    <div className="route">
      {imageComponentList}
    </div>
  )
};



let map_origin = '';
let map_destination = '';

function handleChange(event) {
  if (event.target.name === 'origin') {
    //setState({map_origin: event.target.value});
    map_origin = event.target.value;
  } else if (event.target.name === 'destination') {
    map_destination = event.target.value;
  }

}
function handleSubmit(event) {
  //handleChange(event);
  alert(`origin: ${map_origin}\ndestination: ${map_destination}`);
  event.preventDefault();
}

function App() {
  const routeComponent = getRouteComponent();
  return (
    <div className="App">
      <header className="App-header">
        <p className="back_icon">&#60;</p>

        <form className="query_box" onSubmit={handleSubmit}>
          <input name="origin" type="text" value={map_origin} onChange={handleChange}/>
          <input name="destination" type="text" value={map_destination} onChange={handleChange}/>

          <button>GO</button>
        </form>




        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="content">
        {routeComponent}
      </div>

      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
*/

function App(props) {

    return (
      <div className="App">
      <Router>
      <Switch>
        {/* <header className="App-header"> */}
        <Route path="/Login">
          <LoginForm/>
          <Link to='/SignUp'>Sign Up</Link>
        </Route>
        <Route path="/SignUp">
          <SignupForm/>
          <Link to='/Login'>Login</Link>
        </Route>
        
        {/* </header> */}
        <Route path = "/Home">
          <HomePage></HomePage>
        </Route>
        <Route path = "/Route">
          <DetailedRoute></DetailedRoute>
        </Route>

        <Route path="/possibleRoutes">
          <PossibleRoutes/>
        </Route>
      </Switch>
      </Router>
                
      </div>
    );
}

export default App;