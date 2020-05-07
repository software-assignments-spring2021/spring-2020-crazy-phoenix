import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailedRoute from './DetailedRoute.js';
import Profile from './UserProfile.js';
import PossibleRoutes from './possibleRoutes';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import './App.css';
import HomePageContainer from "./HomePageContainer";
import PossibleRoutesContainer from './PossibleRoutesContainer';


function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/Home" render={() => <HomePageContainer origin={''} destination={''}/>}>
          </Route>
          <Route path="/Login" render={() => <LoginContainer isCorrect={false}/>}>
          </Route>
          <Route path="/SignUp" render={() => <SignUpContainer isFilled={false}/>}>
          </Route>
          <Route path="/UserProfile">
            <Profile/>
          </Route>


          <Route path = "/Route" component={DetailedRoute}>
          </Route>

          <Route path="/possibleRoutes" component={PossibleRoutes}>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
    
export default App;
