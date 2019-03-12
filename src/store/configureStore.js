import { createStore, combineReducers, applyMiddleware , compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import thunk from 'redux-thunk';
import filtersReducers from '../reducers/filters';

const somposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// store creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducers
    }),
    compose(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
}