import React from 'react';
import {withRouter} from 'react-router';
import Login from "./Login";

const LogInContainer = (props) => {
  let isCorrect = props.isCorrect;
  console.log(`isCorrect in container component: ${isCorrect}`);
  const change = () => {
    isCorrect = true;
    props.history.push('/Home');
  };
  return (<Login isCorrect={true} action={change}/>);
};

export default withRouter(LogInContainer);