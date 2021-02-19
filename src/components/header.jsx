import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = (props) => (
  <header>
    <h1>Expensifie</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
    <button onClick={props.startLogout}>logout</button>
  </header>
);

const mapStateToDispatch = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};

export default connect(undefined, mapStateToDispatch)(Header);
