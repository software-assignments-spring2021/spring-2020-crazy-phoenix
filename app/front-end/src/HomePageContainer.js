import React from 'react';
import {withRouter} from 'react-router';
import Login from "./Login";
import HomePage from "./HomePage";

const HomePageContainer = (props) => {
  //console.log(props.origin);
  const origin = props.origin;
  const destination = props.destination;
  const change = (origin, destination) => {

    console.log(`origin is: ${origin}`);
    const searchString = `?origin=${origin}&destination=${destination}`;
    props.history.push({
      pathname: '/possibleRoutes',
      search: searchString
    });
  }
  return (<HomePage origin={origin} destination={destination} action={change}/>);
};

export default withRouter(HomePageContainer);