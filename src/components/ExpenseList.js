import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  return (
    <div>
      <h1>ExpenseList</h1>
      {props.expenses.map((expense) => {
        return <ExpenseListItem 
          key={expense.id}
          id={expense.id} 
          description={expense.description}
          amount={expense.amount}
          createdAt={expense.createdAt}
        />
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);