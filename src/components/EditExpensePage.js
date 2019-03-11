import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      <ExpenseForm 
        expense = {props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/')
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense(props.expense.id))
          props.history.push('/');
        }}
      >Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      if(expense.id === props.match.params.id) {
        return expense
      }
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage);