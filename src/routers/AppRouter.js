import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const Header = () => {
  return(
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="isActive">Create Expense</NavLink>
      <NavLink to="/edit" activeClassName="isActive">Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="isActive">Help</NavLink>
    </header>
  )
}

const AppRouter = () => {
  return(
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  )
}

export default AppRouter;