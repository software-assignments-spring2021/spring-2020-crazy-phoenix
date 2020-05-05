import React from 'react';
import {withRouter} from 'react-router';
import SignUp from "./SignUp";

const SignUpContainer = (props) => {
  let isFilled = props.isFilled;
  const change = () => {
    isFilled = true;
    props.history.push('/Login');
  };
  return <SignUp isFilled={true} action={change}/>;
};

export default withRouter(SignUpContainer);