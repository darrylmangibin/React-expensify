import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      404!
    </div>
  )
}

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.querySelector('#root'));