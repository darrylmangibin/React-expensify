import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import'./styles/styles.scss';

const ExpenseDashboardPage = () => {
  return (
    <div>
      This is from my Dashboard Component
    </div>
  )
}

const AddExpensePage = () => {
  return (
    <div>
      This is from my AddExpense Component
    </div>
  )
}

const EditExpensePage = () => {
  return (
    <div>
      This is from my EditExpense Component
    </div>
  )
}

const HelpPage = () => {
  return (
    <div>
      This is from my Help Component
    </div>
  )
}

const NotFoundPage = () => {
  return (
    <div>
      404! - <Link to="/">GO HOME</Link>
    </div>
  )
}

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

const routes = (
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

ReactDOM.render(routes, document.querySelector('#root'));