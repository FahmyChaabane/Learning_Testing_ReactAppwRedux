import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = (props) => {
  return <button onClick={props.startLogin}>Login</button>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
