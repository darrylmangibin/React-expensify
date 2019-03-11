import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ?  moment(props.expense.createdAt) : moment(),
      calendarfocused: false,
      error: ''
    }
  }

  OnDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => {
      return {
        description
      }
    })
  }
  OnNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => {
      return {
        note
      }
    })
  }

  OnAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount
        }
      })
    }
  }

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => {
        return {
          createdAt
        }
      })
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() =>({ calendarfocused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      this.setState(() => {
        return {
          error: 'Please provide description and amount'
        }
      })
    } else {
      this.props.onSubmit({ 
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
       })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.OnDescriptionChange}
          />
          <input
            value={this.state.amount} 
            type="text"
            placeholder="Amount"
            onChange={this.OnAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarfocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.OnNoteChange}
            value={this.state.note}
            placeholder="Add a note for your expense (optional)"
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;