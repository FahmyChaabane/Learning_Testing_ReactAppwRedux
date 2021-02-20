import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = (props) => (
  <header>
    <h1>Expensifie</h1>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/create">Create Expense</NavLink>
    <NavLink to="/help">Help</NavLink>
    <button onClick={props.startLogout}>logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
