import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => {
  return(
    <header>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="isActive" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="isActive">Create Expense</NavLink>
      <NavLink to="/help" activeClassName="isActive">Help</NavLink>
      <button onClick={startLogout}>Logout</button>
    </header>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  }
}

export default connect(undefined, mapDispatchToProps)(Header);