import React from 'react';
import {withRouter} from 'react-router';
import HomePage from "./HomePage";

let routes = [];

const HomePageContainer = (props) => {
  const origin = props.origin;
  const destination = props.destination;
  const change = (origin, destination) => {
    const searchString = `?origin=${origin}&destination=${destination}`;

    const url = `http://localhost:9000/data/?origin=${origin}&destination=${destination}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        routes = json;

        props.history.push({
          pathname: '/possibleRoutes',
          search: searchString,
          state: {routes: routes}
        });
      })
      .catch(err => err);
  }

  return (<HomePage origin={origin} destination={destination} action={change}/>);
};

export default withRouter(HomePageContainer);