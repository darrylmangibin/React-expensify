import React from 'react';

const ExpenseListItem = (props) => {
  console.log(props)
  return (
    <div>
      <h3>{props.description}</h3>
      <p>{props.amount} - {props.createdAt}</p>
    </div>
  )
}

export default ExpenseListItem;