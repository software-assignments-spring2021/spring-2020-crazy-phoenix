import React from 'react';
import {withRouter} from 'react-router';
import HomePage from "./HomePage";

let routes = [];
// query here back-end
const callApi = (origin, destination) => {
  const url = `http://localhost:3000/data/?origin=${origin}&destination=${destination}`;
  fetch(url)
    .then(res => res.json())
    .then(json => {
      routes = json;
      //console.log(routes);
    })
    .catch(err => err);
};

const HomePageContainer = (props) => {
  //console.log(props.origin);
  const origin = props.origin;
  const destination = props.destination;
  const change = (origin, destination) => {
    const searchString = `?origin=${origin}&destination=${destination}`;

    const url = `http://localhost:3000/data/?origin=${origin}&destination=${destination}`;
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