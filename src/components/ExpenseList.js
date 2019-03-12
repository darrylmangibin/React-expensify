import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">
          Expense
        </div>
        <div className="show-for-desktop">
          Amount
        </div>
      </div>
      <div className="list-body">
        {
          props.expenses.length === 0 ? (
            <div className="list-item--message">
              <span>No expenses</span>
            </div>
          ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem 
                key={expense.id}
                id={expense.id} 
                description={expense.description}
                amount={expense.amount}
                createdAt={expense.createdAt}
              />
            })
          )
        }
      </div>
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