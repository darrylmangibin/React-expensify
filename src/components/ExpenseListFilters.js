import React from 'react';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';
import { connect } from 'react-redux';

const ExpenseListFilters = (props) => {
  return (
    <div>
      <input 
        type="text" 
        value={props.filters.text} 
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value))
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
        if(e.target.value === 'date') {
          props.dispatch(sortByDate())
        } else if(e.target.value === 'amount') {
          props.dispatch(sortByAmount())
        }
      }}>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);