import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = (props) => {
  return <button onClick={props.startLogin}>Login</button>;
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    startLogin: () => dispatch(startLogin(history)),
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
