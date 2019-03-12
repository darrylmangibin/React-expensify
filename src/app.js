import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import'./styles/styles.scss';

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.querySelector('#root'));
    hasRendered = true
  }
}

ReactDOM.render(<p>Loading...</p>, document.querySelector('#root'))


firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard')
      }
    });
  } else {
    renderApp()
    history.push('/')
  }
})