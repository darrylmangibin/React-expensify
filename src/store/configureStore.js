import { createStore, combineReducers, applyMiddleware , compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import thunk from 'redux-thunk';
import filtersReducers from '../reducers/filters';
import authReducer from '../reducers/auth';

const somposeEnhancers = compose

// store creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducers,
      auth: authReducer
    }),
    compose(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
}