import React from 'react';
import {withRouter} from 'react-router';
import Login from "./Login";

const Container = (props) => {
  let isCorrect = props.isCorrect;
  const change = () => {
    isCorrect = true;
    props.history.push('/Home');
  };
  return <Login isCorrect={true} action={change}/>;
};

export default withRouter(Container);