import React from 'react';
import {withRouter} from 'react-router';
import PossibleRoutes from "./possibleRoutes";

const PossibleRoutesContainer = (props) => {
  const change = (detailedRoute) => {
    const searchString = `?detail=${detailedRoute}`;
    props.history.push({
      pathname: '/Route',
      search: searchString
    });
  };
  return (<PossibleRoutes action={change}/>)
};

export default withRouter(PossibleRoutesContainer);